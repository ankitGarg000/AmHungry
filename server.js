/**
 * Created by cbl37 on 1/8/17.
 */

var thumbler = require('video-thumb');

thumbler.extract('/var/www/html/tieupnew/videoFile/video.mp4', 'snapshot.png', '00:00:22', '200x125', function(){

  console.log('snapshot saved to snapshot.png (200x125) with a frame at 00:00:22');

});
