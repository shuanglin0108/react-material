// 变量增强
declare var globalVar: string

// 接口，类型别名
type objType = { name: string, age: number }
declare var globalObj: objType
declare function fn(s?:string): void

// declare class name {
//   constructor(parameters) {
    
//   }
// }


// 全局变量的声明文件主要有以下几种语法：

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有某方法的）全局方法
// interface 和 type 声明全局类型
