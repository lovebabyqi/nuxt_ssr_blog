'use strict';
const { sanitizeEntity} = require('strapi-utils');


module.exports = {

    async find(ctx) {
        const entities = await strapi.services.blog.find();
        ctx.body = {
            status:1,
            msg:'获取成功',
            blogList:entities
        }
    },
    async findOne(ctx) {
        const {title} = ctx.query;
        const entity = await strapi.services.blog.findOne({title});
        return sanitizeEntity(entity, {model: strapi.models.blog});
    },
    async create(ctx) {
        const entity = await strapi.services.blog.create(ctx.request.body);
        // return sanitizeEntity(entity, {model: strapi.models.blog});
        ctx.body = {
            status:1,
            msg:'创建成功',
            blog:entity
        }
    },
    async update(ctx) {
        const {title} = ctx.request.body;
        const entity = await strapi.services.blog.update({title}, ctx.request.body);
        ctx.body = {
            status:1,
            msg:'更新成功',
            blog:entity
        }
        // return sanitizeEntity(entity, {model: strapi.models.blog});
    },
    async delete(ctx) {
        const {title} = ctx.request.body;
        const entity = await strapi.services.blog.delete({title});
        if(Object.keys(entity).length!==0){
            ctx.body = {
                status:1,
                msg:'删除成功'
            }
        }else{
            ctx.body = {
                status:1,
                msg:'删除失败'
            }
        }
    },
};
