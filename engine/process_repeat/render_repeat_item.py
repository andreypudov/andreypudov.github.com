import re
import ast
import operator


def render_repeat_item(template: str, variables: dict) -> str:
    def safe_eval(expr: str, context: dict):
        ops = {
            ast.Add: operator.add,
            ast.Sub: operator.sub,
            ast.Mult: operator.mul,
            ast.Div: operator.truediv,
            ast.Eq: operator.eq,
            ast.NotEq: operator.ne,
            ast.USub: operator.neg,
            ast.UAdd: operator.pos,
        }

        def eval_node(node):
            if isinstance(node, ast.Constant):
                return node.value
            elif isinstance(node, ast.Num):
                return node.n
            elif isinstance(node, ast.Str):
                return node.s
            elif isinstance(node, ast.Name):
                if node.id in context:
                    return context[node.id]
                else:
                    raise NameError(f"Variable '{node.id}' not found")
            elif isinstance(node, ast.BinOp):
                left = eval_node(node.left)
                right = eval_node(node.right)
                op = ops.get(type(node.op))
                if op:
                    return op(left, right)
                else:
                    raise ValueError(f"Unsupported operator: {type(node.op)}")
            elif isinstance(node, ast.UnaryOp):
                operand = eval_node(node.operand)
                op = ops.get(type(node.op))
                if op:
                    return op(operand)
                else:
                    raise ValueError(
                        "Unsupported unary operator: " f"{type(node.op)}"
                    )
            elif isinstance(node, ast.Compare):
                left = eval_node(node.left)
                for op, comparator in zip(node.ops, node.comparators):
                    right = eval_node(comparator)
                    op_func = ops.get(type(op))
                    if op_func:
                        result = op_func(left, right)
                        if not result:
                            return False
                        left = right
                    else:
                        raise ValueError(
                            "Unsupported comparison operator: " f"{type(op)}"
                        )
                return True
            elif isinstance(node, ast.IfExp):
                condition = eval_node(node.test)
                if condition:
                    return eval_node(node.body)
                else:
                    return eval_node(node.orelse)
            else:
                raise ValueError(f"Unsupported node type: {type(node)}")

        try:
            tree = ast.parse(expr, mode="eval")
            return eval_node(tree.body)
        except Exception:
            return f"${{{expr}}}"

    def process_js_ternary(expr: str) -> str:
        ternary_pattern = r"(.+?)\s*\?\s*(.+?)\s*:\s*(.+)"
        match = re.match(ternary_pattern, expr.strip())

        if match:
            condition = match.group(1).strip()
            true_value = match.group(2).strip()
            false_value = match.group(3).strip()

            return f"({true_value}) if ({condition}) else ({false_value})"

        return expr

    def replacer(match):
        leading = match.group(1) or ""
        expr = match.group(2).strip()
        trailing = match.group(3) or ""

        if "?" in expr and ":" in expr:
            expr = process_js_ternary(expr)

        expr = expr.replace("===", "==")
        expr = expr.replace("!==", "!=")

        result = safe_eval(expr, variables)

        if isinstance(result, bool):
            return str(result).lower()

        if result is None or result == "":
            return ""

        return f"{leading}{result}{trailing}"

    pattern = r"([ \t]*)\$\{([^}]+)\}([ \t]*)"

    return re.sub(pattern, replacer, template)
