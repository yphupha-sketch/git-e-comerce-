use('myecommerce-db');
db.getCollection('myorders').deleteMany({});
db.getCollection('myorders').insertMany([
  {
    "id": 1,
    "customer_id": 1,
    "customer_name": "สมชาย ใจดี",
    "items": [
      { "product_id": 1, "name": "ปุ๋ยยูเรีย 46-0-0", "quantity": 2, "price": 650 },
      { "product_id": 3, "name": "ปุ๋ยอินทรีย์อัดเม็ด", "quantity": 5, "price": 120 }
    ],
    "total": 1900,
    "order_date": "2025-03-15",
    "status": "จัดส่งแล้ว",
    "shipping_address": "123 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110",
    "payment_method": "โอนผ่านธนาคาร"
  },
  {
    "id": 2,
    "customer_id": 2,
    "customer_name": "วิไล สมใจ",
    "items": [
      { "product_id": 2, "name": "ปุ๋ยสูตร 15-15-15", "quantity": 1, "price": 850 },
      { "product_id": 4, "name": "ปุ๋ยน้ำชีวภาพ", "quantity": 3, "price": 200 },
      { "product_id": 1, "name": "ปุ๋ยยูเรีย 46-0-0", "quantity": 1, "price": 650 }
    ],
    "total": 2100,
    "order_date": "2025-04-02",
    "status": "กำลังจัดส่ง",
    "shipping_address": "45/6 หมู่ 3 ต.หนองหอย อ.เมือง จ.เชียงใหม่ 50000",
    "payment_method": "เก็บเงินปลายทาง"
  },
  {
    "id": 3,
    "customer_id": 1,
    "customer_name": "สมชาย ใจดี",
    "items": [
      { "product_id": 5, "name": "ปุ๋ยโพแทสเซียม 0-0-60", "quantity": 4, "price": 500 }
    ],
    "total": 2000,
    "order_date": "2025-04-10",
    "status": "รอดำเนินการ",
    "shipping_address": "123 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110",
    "payment_method": "โอนผ่านธนาคาร"
  }
]);
db.getCollection('myorders').find()
