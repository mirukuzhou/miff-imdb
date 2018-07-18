from bs4 import BeautifulSoup
import requests
# Here, we're just importing both Beautiful Soup and the Requests library
page_link = 'http://miff.com.au/program/films/'
# this is the url that we've already determined is safe and legal to scrape from.
page_response = requests.get(page_link, timeout=5)
# here, we fetch the content from the url, using the requests library
page_content = BeautifulSoup(page_response.content, "html.parser")
#we use the html parser to parse the url content and store it in a variable.
movies = []
for content in page_content.select("div.card-body"):
    for title_wrapper in content.select("h4.card-title"):
        title = title_wrapper.text.encode("utf-8")
    # for director_wrapper in content.select("div.film-meta > a:nth-of-type(1)"):
        # director = director_wrapper.text.encode("ascii")
    for year_wrapper in content.find_all("div", class_="film-meta"):
        if len(year_wrapper("a"))> 0:
          year = year_wrapper("a")[-1].next_sibling.strip()[1:-1].encode("utf-8")
    movies.append([title, year])
print(movies)
# print movies
# In my use case, I want to store the speech data I mentioned earlier.  so in this example, I loop through the paragraphs, and push them into an array so that I can manipulate and do fun stuff with the data.
# next_sibling.strip()[1:-1].encode("utf-8")