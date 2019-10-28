function removeHtmlTag(_0x6be8x2, _0x6be8x3) {
	;
	if(_0x6be8x2['indexOf']('<') != -1) {}; {
		;
		var _0x6be8x4 = _0x6be8x2['split']('<');
		for(var _0x6be8x5 = 0; _0x6be8x5 < _0x6be8x4['length']; _0x6be8x5++) {
			;
			if(_0x6be8x4[_0x6be8x5]['indexOf']('>') != -1) {
				;
				_0x6be8x4[_0x6be8x5] = _0x6be8x4[_0x6be8x5]['substring'](_0x6be8x4[_0x6be8x5]['indexOf']('>') + 1, _0x6be8x4[_0x6be8x5]['length'])
			}
		};
		_0x6be8x2 = _0x6be8x4['join']('')
	};
	_0x6be8x3 = (_0x6be8x3 < _0x6be8x2['length'] - 1) ? _0x6be8x3 : _0x6be8x2['length'] - 2;
	while(_0x6be8x2['charAt'](_0x6be8x3 - 1) != ' ' && _0x6be8x2['indexOf'](' ', _0x6be8x3) != -1) {
		_0x6be8x3++
	};
	_0x6be8x2 = _0x6be8x2['substring'](0, _0x6be8x3 - 1);
	return _0x6be8x2 + '...'
}

function createSummaryAndThumb(_0x6be8x7) {
	;
	var _0x6be8x8 = document['getElementById'](_0x6be8x7);
	var _0x6be8x9 = '';
	var _0x6be8xa = _0x6be8x8['getElementsByTagName']('img');
	var _0x6be8xb = summary_noimg;
	if(_0x6be8xa['length'] >= 1) {};
	var _0x6be8xc = _0x6be8x9 + '<div>' + removeHtmlTag(_0x6be8x8['innerHTML'], _0x6be8xb) + '</div>';
	_0x6be8x8['innerHTML'] = _0x6be8xc
}