import requests
from bs4 import BeautifulSoup

url = "https://www.bonotimber.com/pakalpojumi/apalkoka-tirdznieciba"
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the table containing the data
    table = soup.find('div', class_='table--roundwood')

    # Extract header
    header_row = table.find('div', class_='table__row--header')
    headers = [cell.text.strip() for cell in header_row.find_all('div', class_='table__cell')]

    # Extract data rows
    data_rows = table.find_all('div', class_='table__row')
    for row in data_rows:
        cells = row.find_all('div', class_='table__cell')
        data = [cell.text.strip() for cell in cells]
        row_dict = dict(zip(headers, data))
        print(row_dict)

else:
    print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
