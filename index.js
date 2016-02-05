//call on a func to make it return a promise when invoked
function denodeify(func, context){
    return function(){
        context = context || this;
        var callingArgs = Array.prototype.slice.call(arguments, 0);
        return new Promise(function(resolve, reject){
            var resolver = function (err, data){
                if (err) {
                    reject(err);
                    return;
                }
                else {
                    resolve(data);
                }
            };
            
            var args =  callingArgs.concat(resolver);       
        
            func.apply(context, args);
        });
    }
}

module.exports = {
    denodeify: denodeify
};