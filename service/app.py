from flask import Flask
from flask_cors import CORS
import feedparser
from cachetools import TTLCache

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

url = "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml" #   RSS url

# Create a cache with maxsize=1 and a TTL (time-to-live) of 15 minutes (900 seconds)
cache = TTLCache(maxsize=1, ttl=900)

@app.route('/api/data', methods=['GET'])
def demo():
    # Check if the RSS feed is already cached
    if url in cache:
        print("Fetching from cache...")
        return cache[url]

    # Fetch the RSS feed from the actual service
    print("Fetching from the service...")
    feed = feedparser.parse(url)

    # print(feed.feed.title)    
    # for entry in feed.entries:
    #     print(f"{entry.title}: {entry.link}")
    cache[url] = feed
    return feed

if __name__ == '__main__':
    app.run(debug=True)