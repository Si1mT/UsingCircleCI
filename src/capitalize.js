module.exports=function capitalize(s){
	if (s!==typeof(String)){
		throw ("bad input");
	}
	return s.charAt(0).toUpperCase() + s.slice(1);
};
