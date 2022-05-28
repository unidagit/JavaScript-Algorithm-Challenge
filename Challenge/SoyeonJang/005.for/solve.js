// # 문제 5 for문 계산

// 다음 코드의 출력 값으로 알맞은 것은?

var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);

// 1)  10
// 2)  12
// 3)  14
// 4)  16

// 정답: 4번

/* 해설
i = 1일 때, a = 11 계산 -> i += 2로 i = 3으로 증가
i = 3일 때, a = 14 계산 -> i += 2로 i = 5로 증가
i = 5 조건에 안 맞으므로 종료
결과: a + b = 14 + 2 = 16
*/