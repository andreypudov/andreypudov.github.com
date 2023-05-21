import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type LocalizedLinkProps = {
  to: string;
  className?: string | undefined;
};

const LocalizedLink = (props: React.PropsWithChildren<LocalizedLinkProps>) => {
  const { i18n } = useTranslation();
  const url = `/${i18n.language}${props.to}`

  return (
    <Link to = { url } className = { props.className }>
      { props.children }
    </Link>
  );
}

export default LocalizedLink;