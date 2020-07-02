// 对象类型的接口的定义
// 用途：从后端获取的数据

interface List {
    id: number,
    name: string
}

interface Result {
    data: List[]
}

function render(r: Result) {
    r.data.forEach((value) => {
        console.log(value.id, value.name)
    })
}

let result = {
    data: [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'}
    ]
}

render(result)