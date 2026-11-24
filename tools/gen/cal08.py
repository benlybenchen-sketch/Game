# Case 08 calendar: true new moons and solar terms for 1119-1120 (Meeus), month starts with day stems. Run: python3 tools/gen/cal08.py
import math
def newmoon(k):
    T=k/1236.85; JDE=2451550.09766+29.530588861*k+0.00015437*T*T
    M=math.radians(2.5534+29.10535670*k); Mp=math.radians(201.5643+385.81693528*k); F=math.radians(160.7108+390.67050284*k)
    Om=math.radians(124.7746-1.56375588*k); E=1-0.002516*T
    c=(-0.40720*math.sin(Mp)+0.17241*E*math.sin(M)+0.01608*math.sin(2*Mp)+0.01039*math.sin(2*F)+0.00739*E*math.sin(Mp-M)
       -0.00514*E*math.sin(Mp+M)+0.00208*E*E*math.sin(2*M)-0.00111*math.sin(Mp-2*F)-0.00057*math.sin(Mp+2*F)+0.00056*E*math.sin(2*Mp+M)
       -0.00042*math.sin(3*Mp)+0.00042*E*math.sin(M+2*F)+0.00038*E*math.sin(M-2*F)-0.00024*E*math.sin(2*Mp-M)-0.00017*math.sin(Om))
    return JDE+c
def sunlon(jd):
    T=(jd-2451545)/36525; L0=280.46646+36000.76983*T; M=357.52911+35999.05029*T
    C=(1.914602-0.004817*T)*math.sin(math.radians(M))+0.019993*math.sin(math.radians(2*M))+0.000289*math.sin(math.radians(3*M))
    return (L0+C)%360
DT=1500/86400  # deltaT ~ 25 min around 1120? (approx 0.017 days... actually ~ 1500s?) 
TZ=7.5/24
def jd2jul(jd):
    jd+=0.5; Z=int(jd); F=jd-Z; A=Z; B=A+1524; C=int((B-122.1)/365.25); D=int(365.25*C); E=int((B-D)/30.6001)
    day=B-D-int(30.6001*E); m=E-1 if E<14 else E-13; y=C-4716 if m>2 else C-4715; return y,m,day
CAN="Giáp Ất Bính Đinh Mậu Kỷ Canh Tân Nhâm Quý".split(); CHI="Tý Sửu Dần Mão Thìn Tỵ Ngọ Mùi Thân Dậu Tuất Hợi".split()
def ganzhi(jdn): i=(jdn+49)%60; return CAN[i%10]+" "+CHI[i%12]
k0=round((1119.9-2000)*12.3685)
nms=[]
for k in range(k0-2,k0+16):
    jd=newmoon(k)-DT+TZ; nms.append(int(jd+0.5))  # local civil day number (JDN of local date)
# zhongqi: sun longitude multiples of 30 (Z1 = 330 Yushui? ) month containing winter solstice(270) = month 11
for i in range(len(nms)-1):
    a,b=nms[i],nms[i+1]
    zq=[]
    for d in range(a,b):
        l1=sunlon(d-0.5-TZ+DT); l2=sunlon(d+0.5-TZ+DT)
        for z in range(0,360,30):
            if (l1<z<=l2) or (l1>l2 and (z>l1 or z<=l2)): zq.append(z)
    print(jd2jul(a), ganzhi(a), b-a, zq)
print("----")
starts={}
lab={(1119,9,7):(1119,8),(1119,10,6):(1119,9),(1119,11,5):(1119,10),(1119,12,4):(1119,11),(1120,1,2):(1119,12),(1120,2,1):(1120,1),(1120,3,1):(1120,2),(1120,3,31):(1120,3),(1120,4,29):(1120,4),(1120,5,29):(1120,5),(1120,6,28):(1120,6)}
for i in range(len(nms)-1):
    j=jd2jul(nms[i])
    if j in lab: starts[lab[j]]=(nms[i],nms[i+1]-nms[i])
def d(y,m,day): a=starts[(y,m)][0]+day-1; return jd2jul(a), ganzhi(a)
for q in [(1120,3,8),(1120,3,18),(1120,3,19),(1120,4,26),(1120,4,27),(1120,4,30),(1120,5,3),(1119,9,19),(1120,2,15),(1120,3,7)]: print(q, d(*q))
# solar terms dates
for z in range(0,135,15):
    for x in range(starts[(1120,2)][0], starts[(1120,6)][0]+30):
        l1=sunlon(x-0.5-TZ+DT); l2=sunlon(x+0.5-TZ+DT)
        if l1<z<=l2 or (z==0 and l1>350 and l2<10):
            # find lunar
            for k,(s,n) in starts.items():
                if s<=x<s+n: print(z, jd2jul(x), k, x-s+1, ganzhi(x))
