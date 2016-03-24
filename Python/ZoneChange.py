##ZoneChange
##Runtime: 40s
##2015-12-17

import csv
import numpy

data = csv.reader(open(r"zones.csv"),delimiter=",")
next(data,None)
data = list(data)
data1    = filter(lambda p:("Pro"==p[10]),data)
data = list(data1)

times = []
counts = []
player = "empty"

for j in range(len(data)-4):
	if data[j][5]!=player:
		player = data[j][5]
		temp   = data[j][11]	
		if(j!=0):
			time =  data[j-1][8]
			times.append(time)
			counts.append(count)
		count  = 0
	else:
		if(data[j][11]!=temp and data[j][11]==data[j+1][11]==data[j+2][11]==data[j+3][11]==data[j+4][11]):
			temp = data[j][11]
			count = count + 1

result_pro = csv.writer(open("zc_pro.csv","wb"))
result_pro.writerow(["Pro"])
average = []
for i in range(len(times)):
	div = float(float(counts[i])/round(float(times[i])/60))
	average.append(div)
	result_pro.writerow([div])


datavh = csv.reader(open(r"zones.csv"),delimiter=",")
next(datavh,None)
datavh = list(datavh)
datavh    = filter(lambda p:("VeryHigh"==p[10]),datavh)
datavh = list(datavh)
print len(datavh)

timesvh = []
countsvh = []
playervh = "empty"

for jvh in range(len(datavh)-4):
	if datavh[jvh][5]!=playervh:
		playervh = datavh[jvh][5]
		tempvh   = datavh[jvh][11]	
		if(jvh!=0):
			timevh =  datavh[jvh-1][8]
			timesvh.append(timevh)
			countsvh.append(countvh)
		countvh  = 0
	else:
		if(datavh[jvh][11]!=tempvh and datavh[jvh][11]==datavh[jvh+1][11]==datavh[jvh+2][11]==datavh[jvh+3][11]==datavh[jvh+4][11]):
			tempvh = datavh[jvh][11]
			countvh = countvh + 1

result_vh = csv.writer(open("zc_vh.csv","wb"))
result_vh.writerow(["VeryHigh"])
averagevh = []
for ivh in range(len(timesvh)):
	divvh = float(float(countsvh[ivh])/round(float(timesvh[ivh])/60))
	averagevh.append(divvh)
	result_vh.writerow([divvh])


datah = csv.reader(open(r"zones.csv"),delimiter=",")
next(datah,None)
datah = list(datah)
datah    = filter(lambda p:("High"==p[10]),datah)
datah = list(datah)
print len(datah)

timesh = []
countsh = []
playerh = "empty"

for jh in range(len(datah)-4):
	if datah[jh][5]!=playerh:
		playerh = datah[jh][5]
		temph   = datah[jh][11]	
		if(jh!=0):
			timeh =  datah[jh-1][8]
			timesh.append(timeh)
			countsh.append(counth)
		counth  = 0
	else:
		if(datah[jh][11]!=temph and datah[jh][11]==datah[jh+1][11]==datah[jh+2][11]==datah[jh+3][11]==datah[jh+4][11]):
			temph = datah[jh][11]
			counth = counth + 1

result_h = csv.writer(open("zc_h.csv","wb"))
result_h.writerow(["High"])
averageh = []
for ih in range(len(timesh)):
	divh = float(float(countsh[ih])/round(float(timesh[ih])/60))
	averageh.append(divh)
	result_h.writerow([divh])


datan = csv.reader(open(r"zones.csv"),delimiter=",")
next(datan,None)
datan = list(datan)
datan    = filter(lambda p:("High"==p[10]),datan)
datan = list(datan)
print len(datan)

timesn = []
countsn = []
playern = "empty"

for jn in range(len(datan)-4):
	if datan[jn][5]!=playern:
		playern = datan[jn][5]
		tempn   = datan[jn][11]	
		if(jn!=0):
			timen =  datan[jn-1][8]
			timesn.append(timen)
			countsn.append(countn)
		countn  = 0
	else:
		if(datan[jn][11]!=tempn and datan[jn][11]==datan[jn+1][11]==datan[jn+2][11]==datan[jn+3][11]==datan[jn+4][11]):
			tempn = datan[jn][11]
			countn = countn + 1

result_n = csv.writer(open("zc_n.csv","wb"))
result_n.writerow(["Normal"])
averagen = []
for inn in range(len(timesn)):
	divn = float(float(countsn[inn])/round(float(timesn[inn])/60))
	averagen.append(divn)
	result_n.writerow([divn])

test = csv.DictReader(open(r"zc_pro.csv"),delimiter=",")
test = csv.DictReader(open(r"zc_vh.csv"),delimiter=",")
test = csv.DictReader(open(r"zc_h.csv"),delimiter=",")
test = csv.DictReader(open(r"zc_n.csv"),delimiter=",")

temp = []
i = 0
for row in test:
	for key, value in row.iteritems():
		row[key] = float(value)
		a = {"Tier":"Pro","ID":i,"AverageChange":row[key]}
	temp.append(a)
	i = i+1
print temp





