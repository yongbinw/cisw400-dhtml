var $$ = function(){}
$$.prototype = {
	$id:function(id){
		return document.getElementById(id);
	},
	$class:function(className){
		return document.getElementsByClassName(className);
	},
	$name:function(name){
		return document.getElementsByName(name);
	},
	//delete space on the left
	ltrim:function(str) {
        return str.replace(/(^\s*)/g,'');
    },
    //delete space on the right
    rtrim:function(str) {
        return str.replace(/(\s*$)/g,'');
    },
    //delete space on the left and right
	trim:function(str){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },

}

$$ = new $$();