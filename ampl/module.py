# JUST RUN WITH python module.py

import os
import json
import sys

# assign directory
DIRECTORY = 'files/exported-content-types-production' #sys.argv[1]
AMP_REPOS = ['latingrammyculturalfoundation'] #sys.argv[2]

# iterate over files
for filename in os.listdir(DIRECTORY):
    f = os.path.join(DIRECTORY, filename)
    # checking if it is a file
    if os.path.isfile(f):
        print(f)
        #READ
        f1 = open(f,'r')
        data = json.load(f1)
        data['repositories'] = AMP_REPOS
        f1.close()
        #WRITE
        f2 = open(f,'w')
        f2.write(json.dumps(data, indent=2))
        f2.close()  