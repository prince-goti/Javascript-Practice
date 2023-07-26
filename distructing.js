//SPREAD
const onearray = [1,2,3,4]
const twoarray = [5,6,7,8]

//const threearray = onearray.concat(twoarray)
const threearray = [...onearray,...twoarray]

console.log(threearray)

//REST
//1
function anyarguments(){
    let args = Array.from(arguments)
    let finalargs = args.map( p => p)
    console.log(finalargs)
}
//2
function manyarguments(...arg){
    let finarg = arg.map(o  =>  o)
    console.log(finarg)
}

anyarguments(1,2,3)
anyarguments(1,2,3,4,5,6,7)