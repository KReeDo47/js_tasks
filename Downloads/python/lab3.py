'''a = int(input("Выведите первое число: "))
b = int(input("Выведите второе число: "))

print("Тип a:", type(a))
print("Тип b:", type(b))

result = a - b
print("Сумма выведенных чисел:", result)


a = float(input()) 
b = float(input()) 
c = float(input()) 
if a==0 or b==0 or c==0:
    print("Деление на 0")
else:
    y = 
    print(y)'''

print("Ноль в качестве знака операции"
      "\nзавершит работу программы")
while True:
    s = input("Знак (+,-,*,/): ")
    if s == '0':
        break
    if s in ('+', '-', '*', '/'):
        x = float(input("x="))
        y = float(input("y="))
        if s == '+':
            print("%.2f" % (x+y))
        elif s == '-':
            print("%.2f" % (x-y))
        elif s == '*':
            print("%.2f" % (x*y))
        elif s == '/':
            if y != 0:
                print("%.2f" % (x/y))
            else: 
                print("Деление на ноль!")
    else:
        print("Неверный знак операции!")                             


















