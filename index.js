function generateSongText(num) {
    for (i = num; i >= 1; i--) {
      let a = i % 10 === 1
      let b = i % 10 === 2
      let c = i % 10 === 3
      let d = i % 10 === 4
        if(i === 1){
        console.log(`${i} бутылка пива на стене
          ${i} бутылка пива!
        Возьми одну, пусти по кругу
          нет бутылок пива на стене!`)
        }else if(i === 11 || i === 12 || i === 13 || i === 14){        
        console.log(`${i} бутылок пива на стене
          ${i-1} бутылок пива!
        Возьми одну, пусти по кругу
          ${i-1} бутылок пива на стене!`)
        }else if (a) {
        console.log(`${i} бутылка пива на стене
          ${i} бутылка пива!
        Возьми одну, пусти по кругу
          ${i-1} бутылок пива на стене!`)
        }else if (b) {
        console.log(`${i} бутылки пива на стене
          ${i} бутылки пива!
        Возьми одну, пусти по кругу
          ${i-1} бутылка пива на стене!`)
        } else if(c) {
        console.log(`${i} бутылки пива на стене,
          ${i} бутылки пива!
        Возьми одну, пусти по кругу,
          ${i-1} бутылки пива на стене!`)
        }else if(d){
        console.log(`${i} бутылки пива на стене
          ${i-1} бутылок пива!
        Возьми одну, пусти по кругу
          ${i-1} бутылок пива на стене!`)
        }else{
        console.log(`${i} бутылок пива на стене
          ${i-1} бутылок пива!
        Возьми одну, пусти по кругу
          ${i-1} бутылок пива на стене!`)
        }
      }
};
  
generateSongText(99)