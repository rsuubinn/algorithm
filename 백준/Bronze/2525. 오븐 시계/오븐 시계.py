a, b = input().split()
a = int(a)
b = int(b)

c = int(input())

m = a*60 + b + c

a = int(m/60)
b = int(m%60)

if (a>=24):
  a = a - 24

print(a, b)