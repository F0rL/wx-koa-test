function fn1(){
  fn2()
}

async function fn2(){
  try {
    let msg = await fn3()
    console.log(msg)    
  } catch (error) {
    console.log('error')
  }
}

function fn3(){
  return new Promise((resolve, reject) => {
    let num = Math.random()
    if(num < 0.5) {
      setTimeout(() => {
        reject('num error') 
      }, 1000);
    }else {
      resolve('success')
    }
  })
}

fn1()