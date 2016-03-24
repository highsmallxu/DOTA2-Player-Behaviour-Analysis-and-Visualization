##Death HeatMap
##Run Time:20s
##2015-12-17
import csv

reader = csv.reader(open(r"zones.csv"),delimiter=",")
next(reader,None)
mylist = list(reader)
length = len(mylist)
data = []
init = mylist[0][7]
writer = csv.writer(open("heatmap_temp.csv","wb"))
for i in range(length):
	if (mylist[i][7]==init and mylist[i][11]!= "base1 radiant" and mylist[i+1][11]=="base1 radiant"):
		writer.writerow(mylist[i])
	else:
		init = mylist[i][7]
for j in range(length):
	if(mylist[j][7]==init and mylist[j][11]!= "base2 dire" and mylist[j+1][11]=="base2 dire"):
		writer.writerow(mylist[j])
	else:
		init = mylist[j][7]


reader1 = csv.reader(open(r"heatmap_temp.csv"),delimiter=",")
reader1 = list(reader1)
temp1 = []
unique = []

for m in range(len(reader1)):
	if [int(reader1[m][1]),int(reader1[m][2])] in unique:
		pass
	else:
		un = [int(reader1[m][1]),int(reader1[m][2])]
		unique.append(un)

for n in range(len(reader1)):
	new = [int(reader1[n][1]),int(reader1[n][2])]
	temp1.append(new)


write1 = csv.writer(open("count_unique_heatmap.csv","wb"))
write1.writerow(["x","y","count"])
for z in range(len(unique)):
	a = temp1.count(unique[z])
	b = [unique[z][0],unique[z][1],a,]
	write1.writerow(b)


