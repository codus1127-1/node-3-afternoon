update product
set description = $1
where product_id = $2;
select * from product
order by product_id;