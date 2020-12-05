function hasCollided(OB1,OB2){
    OB1RightEdge = OB1.x + OB1.width;
    OB2LeftEdge = OB2.x;
    if (OB1RightEdge >= OB2LeftEdge){
      return true
    }
    return false;
    }