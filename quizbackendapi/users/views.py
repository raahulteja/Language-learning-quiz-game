from rest_framework.response import Response
from users.serializers import myuserClassSerializer,progressSerializer,DataSerializer
from rest_framework.decorators import api_view
from users.models import myuserClass,progress
from django.contrib.auth.models import User
from exercises.models import questions,Language
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated


# Create your views here.
@api_view(['POST'])
def registermyuser(request):
        try:
            print(request.data)
            xx=request.data
            print(xx)
            uss=User.objects.create_user(xx['username'],xx['email'],xx['password'])
            xx.pop('username')
            xx.pop('email')
            xx.pop('password')
            xx['myuser']=uss.id
            xx['mobno']=123
            print(xx)
            userSer=myuserClassSerializer(data=xx)
            print(userSer)
            if userSer.is_valid():
                userSer.save()
                return Response(userSer.data)
            return Response(userSer.errors)
        except Exception as e:
            return Response({"error":str(e)})
    
        #return Response({"s":"s"})
@permission_classes([IsAuthenticated])
@api_view(['GET','POST'])
def submission(request):
        if request.method=='GET':
             return Response({"s":"s"})
        else:
            try:
                print(request.auth)
                access_token_obj = AccessToken(str(request.auth))
                user_id=access_token_obj['user_id']
                userr=User.objects.get(id=user_id)
                print(userr)
                myu=myuserClass.objects.get(myuser=userr)
                print(myu)
                responsedata=request.data
                print(responsedata)
                t=0
                for key,val in responsedata.items():
                    que=questions.objects.get(id=int(key))
                    print(que)
                    try:
                        prog=progress.objects.get(qcorrect=que,puser=myu)
                        continue
                    except:
                            if que.ans== val:
                                prog=progress(qcorrect=que,puser=myu)   
                                prog.save()
                                t=t+1
                return Response({'score':{t}})
            except Exception as e:
                return Response({"error":str(e)})


@api_view(['GET'])
def score(request):
    its=progress.objects.all()
    its=set(its)
    progS=progressSerializer(its,many=True)
    print(progS.data)
    '''
    for key,val in progS.data:
         print(key+"::"+val)
         '''
    return Response(progS.data)

@api_view(['POST'])
def verifytoken(request):
    #print(request.auth+"\n\n\n\n--ss\n")
    try:
        access_token_obj = AccessToken(str(request.auth))
        user_id=access_token_obj['user_id']
        userr=User.objects.get(id=user_id)
        print(userr.username)
        return Response({'user':userr.username})
    except Exception as e:
        return Response({'user':''})



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def leaderboard(request):
    try:
        allu=myuserClass.objects.all()
        board=[]
        print(allu)
        print()
        print()
        for u in allu:
            pr=progress.objects.filter(puser=u)
            print(pr)
            print(len(pr))
            board.append([u.myuser.username,len(pr)])
            
            #print(u.myuser.username)
            #pr=progress.objects.filter(puser=u)
        
        sorted_leaderboard = sorted(board, key=lambda x: x[1], reverse=True) 
        print(sorted_leaderboard)
        serializer = DataSerializer(data={'data': sorted_leaderboard})

        # Check if the data is valid
        
        if serializer.is_valid():
                # Access the serialized data
                serialized_data = serializer.data
                print(serialized_data)
                return Response(serialized_data)
        else:
            # Handle the case where the data is not valid
            print(serializer.errors)
        
        return Response({"error":"error"})



        
          
    except Exception as e:
        return Response({'0':str(e)})