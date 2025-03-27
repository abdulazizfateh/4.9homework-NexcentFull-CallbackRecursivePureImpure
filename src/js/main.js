const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.style.boxShadow = "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px";
    } else {
        header.style.boxShadow = "none";
    }
})




// 1) 1 dan 10 gacha toq sonlarni chiqaring
// 2) 100 dan 0 gacha o'nlik sonlarni chiqaring // 100, 90, 80...
// 3) 0 dan 10 gacha bo'lgan sonlarni yig'indisini toping
// 4) n soni berilgan "Laylo" ismini n marta gaytaring
// 5) a sonini n darajasini recursive va loop yordamida chiqaring

// TASK 1.1 - Using Loop
{
    const oneToTenCount = () => {
        for (let i = 1; i <= 10; i += 2) {
            console.log(i);
        }
    }
    oneToTenCount();
}

// TASK 1.2 - Using Recursive Function
{
    let i = 1;
    const oneToTenCount = (i) => {
        if (i <= 10) {
            console.log(i);
            i += 2;
            oneToTenCount(i);
        }
    }
    oneToTenCount(i);
}



// TASK 2.1 - Using Loop
{
    const descendingTens = () => {
        for (let i = 100; i >= 10; i -= 10) {
            console.log(i);
        }
    }
    descendingTens();
}

// TASK 2.2 - Using Recursive Function
{
    let i = 100
    const descendingTens = (i) => {
        if (i >= 10) {
            console.log(i);
            i -= 10;
            descendingTens(i);
        }
    }
    descendingTens(i);
}



// TASK 3.1 - Using Loop
{
    const sumTillTen = () => {
        let total = 0;
        for (let i = 0; i <= 10; i++) {
            total += i;
        }
        return total;
    }
    console.log(sumTillTen());
}

// TASK 3.2 - Using Recursive Function
{
    let i = 1;
    let total = 0;
    const sumTillTen = () => {
        if (i <= 10) {
            total += i;
            i++;
            sumTillTen();
        }
        return total;
    }
    console.log(sumTillTen());
}



// TASK 4.1 - Using Loop
{
    const nTimesWord = (n) => {
        for (let i = 1; i <= n; i++) {
            console.log("Laylo");
        }
    }
    nTimesWord(5);
}

// TASK 4.2 - Using Recursive Function
{
    let i = 1;
    const nTimesWord = (n) => {
        if (i <= n) {
            console.log("Laylo");
            i++;
            nTimesWord(n);
        }
    }
    nTimesWord(5);
}



// TASK 5.1 - Using Loop
{
    const toNPower = (a, n) => {
        let square = 1;
        for (let i = 1; i <= n; i++) {
            square *= a;
        }
        return square;
    }
    console.log(toNPower(3, 5));
}

// TASK 5.2 - Using Recursive Function 
{
    let i = 1;
    let square = 1;
    const toNPower = (a, n) => {
        if (i <= n) {
            square *= a;
            i++;
            toNPower(a, n);
        }
        return square;
    }
    console.log(toNPower(3, 5));
}