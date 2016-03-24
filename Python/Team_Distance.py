##Team Distance
##Run time:20s
##2015-12-17

import csv
import numpy

# pro_win = csv.reader(open(r"Pro_Win.csv"),delimiter=",")
# next(pro_win,None)
# pro_win = list(pro_win)

# pro_lose = csv.reader(open(r"Pro_Lose.csv"),delimiter=",")
# next(pro_lose,None)
# pro_lose = list(pro_lose)

# veryhigh_win = csv.reader(open(r"VeryHigh_Win.csv"),delimiter=",")
# next(veryhigh_win,None)
# veryhigh_win = list(veryhigh_win)

# veryhigh_lose = csv.reader(open(r"VeryHigh_Lose.csv"),delimiter=",")
# next(veryhigh_lose,None)
# veryhigh_lose = list(veryhigh_lose)

# high_win = csv.reader(open(r"High_Win.csv"),delimiter=",")
# next(high_win,None)
# high_win = list(high_win)

# high_lose = csv.reader(open(r"High_Lose.csv"),delimiter=",")
# next(high_lose,None)
# high_lose = list(high_lose)

# normal_win = csv.reader(open(r"Normal_Win.csv"),delimiter=",")
# next(normal_win,None)
# normal_win = list(normal_win)

# normal_lose = csv.reader(open(r"Normal_Lose.csv"),delimiter=",")
# next(normal_lose,None)
# normal_lose = list(normal_lose)


# writer = csv.writer(open("result_middle.csv","wb"))
# writer.writerow(["Pro_Win","Pro_Lose","VeryHigh_Win","VeryHigh_Lose","High_Win","High_Lose","Normal_Win","Normal_Lose"])

# for i in range(2000,3000):
# 	writer.writerow([pro_win[i][0],pro_lose[i][0],veryhigh_win[i][0],veryhigh_lose[i][0],high_win[i][0],high_lose[i][0],normal_win[i][0],normal_lose[i][0]])

##############```````````##################
# test = csv.DictReader(open(r"result.csv"),delimiter=",")
# temp = []
# for row in test:
# 	for key, value in row.iteritems():
# 		row[key] = float(value)
# 	temp.append(row)
# print temp[0]


# temp2 = sorted(temp[0].items(),key = lambda x: x[1])
# print temp2
#############````````````###################

#############````````````####################
# writer2 = csv.writer(open("result2_middle.csv","wb"))
# test = csv.reader(open(r"result_middle.csv"),delimiter=",")
# next(test,None)
# test = list(test)

# sort = numpy.sort(test)

# for i in range(1000):
# 	sort2 = sort[i]
# 	sort2 = map(lambda x:(x),sort2)
# 	temp = []
# 	for j in range(8):
# 		a = int(sort2.index(test[i][j])+1)
# 		#print a
# 		temp.append(a)
# 	#print temp
# 	writer2.writerow(temp)
#############```````````######################

early_time = csv.reader(open(r"DD_early.csv"),delimiter=",")
next(early_time,None)
early_time = list(early_time)
result_early = []

for i in range(8):
	result_early_temp = 0
	for j in range(len(early_time)):
		result_early_temp = result_early_temp+int(early_time[j][i])
	result_early.append(result_early_temp)

last_time = csv.reader(open(r"DD_last.csv"),delimiter=",")
next(last_time,None)
last_time = list(last_time)
result_last = []

for a in range(8):
	result_last_temp = 0
	for b in range(len(last_time)):
		result_last_temp = result_last_temp+int(last_time[b][a])
	result_last.append(result_last_temp)

result_final = csv.writer(open("team_distance.csv","wb"))
result_final.writerow(["Early_time","Late_time"])
for x in range(8):
	result_final.writerow([result_early[x],result_last[x]])

print result_final





