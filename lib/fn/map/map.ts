
const mapp =
  (func: Function) =>
  // Missed Opportunity for ([x, xs])
    (data: any[]) => {

      const x  = data[0]
      const xs = data.slice(1)
      let tmp = []

      return (
        !xs.length
          ? tmp.push(func(x))
          : mapp(func)(xs)
      )
    }


const ints = [1, 2, 3, 4]
const char = ['a', 'b', 'c', 'd']
const strings = ["this", "is", "a", "test"]


console.log(mapp(x => x*2)(ints))
