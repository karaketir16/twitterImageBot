# twitterImageBot
search something on twitter and download photo

### Why and How I wrote it, and What exactly does that?
  Before telling what it does, let me tell you why I wrote it. I was following a page on twitter and they was sharing exactly one phone per day. Then I wanted to download all of the photos they had shared. But, There was huge amount of photos (nearly a thousand). I search the internet, I found some programs that requare twitter api. I apply `develepor.twitter` to api access, but they didn't give.
  Firstly I wanted to open that user's twitter page on browser and download all of the photos on that page, but twitter load tweets when you scroll down. I searched a script to scroll down continuously, but I didn't found it and also I could't write it. Then I realized that page shares every photo with text in same struct every day. for example `"Berceste beyitler - 3"` for day 3 and `"Berceste beyitler - 20"` for day 20. When I searched `"Berceste beyitler - 3"` or any other number in twitter the tweet that includes that photo I want, was the top of search reasult. It was great because there was an algorithm.

1. select a `number`
2. search `"Berceste beyitler - <number>"`
3. download first tweet's photo
4. increase `number`
5. go step 4

  As I sad it was great, but there were some problems that I had to solve. Let proceed step by step.
step 1:
  There are no problem `let y = 3`

step 2:
  What exactly happens when you click the twitters search button? Well, I don't now what exactly happens, but I have observed that when I searched `"Berceste beyitler - 3"` (with quotes), the url of the page turned into `https://twitter.com/search?q=%22Berceste%20beyitler%20-%203%22&src=typed_query` and for `"Berceste beyitler - 4"` it was `https://twitter.com/search?q=%22Berceste%20beyitler%20-%204%22&src=typed_query` . As you realized, just one number changed in url, when I changed the number. So the search url for `Berceste beyitler - <number>` is `https://twitter.com/search?q=%22Berceste%20beyitler%20-%20<number>%22&src=typed_query` .

step 3:
  This step is little complicated. First problem is you can't download file with javascript in browser console. At least I can't find any way to do that. So, I decided to just collect the url of images with javascript, and download them with `wget` in linux terminal. 
  How to get a photo's url? It is simple. When you search `Berceste beyitler - 3` and right click the photo on first tweet and press inspect, you get the link on elemet's src attribute. But how to automatise it with javascript? Just right click the 
  
I have wroten this code for downloads 
### Usage
