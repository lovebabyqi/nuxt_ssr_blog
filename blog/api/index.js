import request from './request';

//findAll blog
export const reqFindAll = ()=>request('/blog/findAll');

//findOne
export const reqFindOne = (title='')=>request('/blog/findOne',{title},'get');

//create blog
/*
* blog字段 {title:'标题', desc:'描述', tags:'标签, 关键字', count:'浏览量,初始0', content:'博客内容',cid:'id'}
* */
export const reqCreateBlog = (blog)=>request('/blog/create',blog,'post');

//update blog
export const reqUpdateBlog = (blog)=>request('/blog/update',blog,'post');

//delete
export const reqDeleteOne = (title)=>request('/blog/delete',{title},'post');

