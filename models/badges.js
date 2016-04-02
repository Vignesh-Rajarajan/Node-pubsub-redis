var redis=require('../lib/redis');

exports.save=function (badges,callback) {
  if(!badges.length) return callback(null,null);
  var badge=badges.pop();
  redis.lpush('badges',JSON.stringify(badge),function(err){
    if(err) callback(err,null);
    exports.save(badges,callback);
  });
}
