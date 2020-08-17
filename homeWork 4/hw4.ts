function PreSaveAction(): boolean {
    let test:string = $('nobr:contains("Договор / Заказ")').closest('tr').find('.ms-rtestate-write').html();
    let arr:string []= test.split('');
    let s:number = arr.length;
    if (s<=8){
      let input: string = prompt('Введите ссылку на договор в формате: название договора#ссылка');
      let [URLP, tit] = input.split('#');
      $('nobr:contains("Договор / Заказ")').closest('tr').find('.ms-rtestate-write').html(`<a href="${URLP}" target="_blank">${tit}</a>`);
      return true;
    }else{
      return true;
    }
} 

