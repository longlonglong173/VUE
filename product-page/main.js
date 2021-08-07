var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        target: '_blank',
        price: 20000,
        sale: 0.2,
        selectedProduct: 2,
        cardNumber: 1,
        brand: 'YQFY',
        listProductDetail: [
            {
                image: './images/red.jpg',
                quantity: 0,
                textColor: 'Màu Đỏ',
            },
            {
                image: './images/blue.jpg',
                quantity: 8,
                textColor: 'Màu Xanh',
            },
            {
                image: './images/black.jpg',
                quantity: 2,
                textColor: 'Màu Đen',
            },
        ],
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun',
        ],
        description: '<p>Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc</p>'
        ,
    },
    methods: {
        handleClickColor(e, index) {
            this.selectedProduct = index;
            // console.log(e, index, this);
        },
        classActive(index) {
            return {
                active: this.selectedProduct === index,
            };
        },
        handleAddToCart(e) {
            if (this.cardNumber + 1 > this.getProduct.quantity) {
                alert('So luong khong du');
            } else {
                this.cardNumber = this.cardNumber + 1;
            }
            console.log(e.target);
        },
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'VND',
            }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'VND',
            }).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        },
    },
});
