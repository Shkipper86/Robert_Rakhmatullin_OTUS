function PreSaveAction(): boolean {
    const test:string = $('nobr:contains("Договор / Заказ")').closest('tr').find('.ms-rtestate-write').html();
    const arr:string []= test.split('');
    const s:number = arr.length;
    if (s<=8){      
      inputString();      
    }
    return true;
} 
function inputString(): void{
  const input: string = prompt('Введите ссылку на договор в формате: название договора#ссылка');
  const [tit,URLP, ...rest] = input.split('#');
  if (URLP == null){
      PreSaveAction();       
}   
$('nobr:contains("Договор / Заказ")').closest('tr').find('.ms-rtestate-write').html(`<a href="${URLP}" target="_blank">${tit}</a>`); 
}
