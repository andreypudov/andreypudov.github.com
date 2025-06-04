from providers.data_reader import read_data

try:
    data = read_data(validate_data=True)
    print(f"Data validation completed. Found {len(data)} albums.")
except Exception as e:
    print(f"Data validation failed: {e}")
