###Position at Initial Time and End Time
###Run Time:35s
###2015-12-17
import csv
###Position at Initial Time
initial = csv.reader(open(r"zones.csv"),delimiter=",")
initial    = filter(lambda p:("0"==p[8]),initial)

writer = csv.writer(open("initial_position.csv","wb"))
writer.writerow(["x","y","Tier","WinLose"])

for i in range(len(initial)):
	writer.writerow([initial[i][1],initial[i][2],initial[i][10],initial[i][6]])

###Position at End Time
end = csv.reader(open(r"zones.csv"),delimiter=",")
next(end, None) 
end = list(end)
writer2 = csv.writer(open("end_position.csv","wb"))
writer2.writerow(["t","x","y","match","team","player","won","tstd","tsync","tper","tier","zone"])
temp = 0
for j in range(len(end)):
	if (int(end[j][8])>=temp):
		temp = int(end[j][8])
	else:
		writer2.writerow(end[i-1])
		temp = int(end[j][8])
