
if (typeof Object.assign === 'undefined') {
    Object.defineProperty(Object, 'assign', {
        value: function (target) {
            if (target == null) {
                throw TypeError('Cannot convert undefined or null to Object');
            }
    
            target = new Object(target);
            var args = [].slice.call(arguments, 1);
    
            for (var index = 0; index < args.length; index++) {
                var source = args[index];
                if (source == null) continue;
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
    
            return target;
        },
        writable: true,
        configurable: true
    });
}
