function PreSaveAction() {
    var test = $('nobr:contains("Договор / Заказ")').closest('tr').find('.ms-rtestate-write').html();
    var arr = test.split('');
    var s = arr.length;
    if (s <= 8) {
        var input = prompt('Введите ссылку на договор в формате: название договора#ссылка');
        var _a = input.split('#'), URLP = _a[0], tit = _a[1];
        $('nobr:contains("Договор / Заказ")').closest('tr').find('.ms-rtestate-write').html("<a href=\"" + URLP + "\" target=\"_blank\">" + tit + "</a>");
        return true;
    }
    else {
        return true;
    }
}
