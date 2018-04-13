"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArraySerializer = (function () {
    function ArraySerializer(props) {
        this.props = props;
    }
    ArraySerializer.prototype.serialize = function (instance) {
        if (!instance)
            throw new Error('No serialization instance provided');
        var props = this.props;
        var json = {};
        for (var i = 0, length_1 = props.length; i < length_1; i++) {
            var key = props[i];
            if (!instance.hasOwnProperty(key))
                throw new Error("Invalid instance property name \"" + key + "\"");
            var val = instance[key];
            if (typeof (val) !== 'undefined')
                json[key] = val;
        }
        return json;
    };
    ArraySerializer.prototype.deserialize = function (source, instance) {
        if (!source)
            throw new Error('No source object provided');
        if (!instance)
            throw new Error('No serialization instance provided');
        var props = this.props;
        for (var i = 0, length_2 = props.length; i < length_2; i++) {
            var key = props[i];
            var val = source[key];
            if (typeof (val) !== 'undefined')
                instance[key] = val;
        }
    };
    return ArraySerializer;
}());
exports.ArraySerializer = ArraySerializer;
//# sourceMappingURL=arrayserializer.js.map