
    //ES5
    const CounterV1 = {
        count: 0,
        counter: function counter() {
            setInterval(function () {
            this.count++;
            console.log(this.count);
            }, 1000);
        }
    };


    //ES6
    const CounterV1 = {
        count: 0,
        counter: function counter() {
            setInterval(() =>
            console.log(CounterV1.count++)
            , 1000);
        }
    };


    //ES6
    const CounterV2 = {
        count: 0,
        counter: () => {
            setInterval(() => console.log(CounterV2.count++)
            , 1000);
        }
    };