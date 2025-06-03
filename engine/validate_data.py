from providers.data_reader import read_data

data = read_data(validate_data=True)
print(f"Data validation completed. Found {len(data)} albums.")
