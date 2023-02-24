a = int(input('День от 1 до 31:')) 
b = int(input('Месяц от 1 до 12:')) 
 
if b == 1 or b == 2 or b == 12: 
    print('Зима') 
elif b == 3 or b == 4 or b == 5: 
    print('Весна') 
elif b == 6 or b == 7 or b == 8: 
    print('Лето') 
elif b == 9 or b == 10 or b == 11: 
    print('Осень') 
else: 
    print('Error')  
 
if (b == 1 or b == 3 or b == 5 or b == 7 or b == 8 or b == 10 or b == 12) and a > 31: 
    print('Нет такого дня в месяце') 
elif (b == 4 or b == 6 or b == 9 or b == 11) and a > 30: 
    print('Нет такого дня в месяце')     
elif b == 2 and a > 28: 
    print('Нет такого дня в месяце')     
elif a <= 0: 
    print('Error') 
else: 
    g = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334] 
    f = g[b - 1] + a 
    print(f)


