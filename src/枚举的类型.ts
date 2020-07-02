// 数字枚举  
// 数字枚举的底层实现是反向映射，如
/**
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Institution"] = 2] = "Institution";
    Role[Role["Group"] = 3] = "Group";
    Role[Role["Merchant"] = 4] = "Merchant";
    Role[Role["Store"] = 5] = "Store";
})(Role || (Role = {}));
*/

enum Role {
    Admin = 1,
    Institution,
    Group,
    Merchant,
    Store
}

// 字符串枚举
// 字符串枚举不是通过反向映射实现的
/**
 var Message;
(function (Message) {
    Message["Success"] = "success";
    Message["Fail"] = "fail";
})(Message || (Message = {}));
*/

enum Message {
    Success = 'success',
    Fail = 'fail'
}

// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Feb, Month.Jan, Month.Mar]

// 将程序中不容易记忆的硬编码，或者在未来可能改变的常量，抽取出来定义为枚举类型