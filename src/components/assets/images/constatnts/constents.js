
const YOUTUBEAPI_KEY="AIzaSyAxXZC_m09EeOTWe1VfE_gC4VU4DtSTDRg";

export const YOUTUBE_LIST=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBEAPI_KEY}`;


export const SEARCH_URL="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="