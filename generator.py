from random import randint
class Gen:
    def __init__(self, gt):
        self.gentype=gt
    def generation(self):
        if self.gentype=="t" :
            tvar=randint(1,18)
            types={
                1:"Grass",
                2:"Water",
                3:"Fire",
                4:"Normal",
                5:"Ice",
                6:"Bug",
                7:"Electric",
                8:"Fairy",
                9:"Psychic",
                10:"Dark",
                11:"Ghost",
                12:"Steel",
                13:"Ground",
                14:"Rock",
                15:"Poison",
                16:"Flying",
                17:"Fighting",
                18:"Dragon"
            }
            return types[tvar]
        else:
            types={
                1:"UB",
                2:"Z Move",
                3:"None",
                4:"None",
                5:"Gmax",
                6:"Mega"
            }
            tvar=randint(1,6)
            return types[tvar]
def generate():
    type1o=Gen("t")
    r=randint(1,2)
    if(r==1):
        type2o=Gen("t")
        type2=type2o.generation()
    else:
        type2="Nothing"
    type1=type1o.generation()
    specialo=Gen("s")
    special=specialo.generation()