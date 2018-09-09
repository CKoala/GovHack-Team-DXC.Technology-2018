import csv


class postcodeData(object):
    def __init__(self, lat=None, lng=None, population=None):
        self.lat = lat
        self.lng = lng
        self.population = population

    def setPopulation(self, population):
        self.population = population

    def getPopulation(self):
        return self.population

    def getLat(self):
        return self.lat

    def getLng(self):
        return self.lng


postcodeDic = {}

with open('postcode-lat-lng.csv') as plocation:
    reader = csv.reader(plocation)
    i = 0
    for row in reader:
        if i == 0:
            i += 1
            continue

        value = postcodeDic.get(row[0])
        if value == None:
            newValue = postcodeData(row[3], row[4])
            postcodeDic[row[0]] = newValue
            print "Added: " + row[0]

with open('postcode-population.csv') as population:
    reader = csv.reader(population)
    i = 0
    for row in reader:
        if i == 0:
            i += 1
            continue

        value = postcodeDic.get(row[0])
        if value != None:
            value.setPopulation(row[1])
            print "Updated: " + row[0] + ", pop: " + value.getPopulation()

with open('merged-data.csv', 'wb') as mergedFile:
    with open("postcode-business-final.csv") as business:
        reader = csv.reader(business)
        i = 0
        for row in reader:
            if i == 0:
                i += 1
                csvrow = ",".join(row)
                mergedFile.write(csvrow + ",lat,lng,population\n")
                continue

            value = postcodeDic.get(row[0])
            lat = value.getLat()
            lng = value.getLng()
            pop = value.getPopulation()
            if lat == None:
                lat = 0
            if lng == None:
                lng = 0
            if pop == None:
                pop = 0

            csvrow = ",".join(row)
            mergedFile.write(csvrow + "," + str(lat) + "," + str(lng) + "," +
                             str(pop))
            mergedFile.write("\n")
