function croosIndexCalc() 
			{
				I1 = document.getElementById('P1').value;
                I2 = document.getElementById('P2').value;
                if(I1=="Puro") i1=1;
                else if(I1=="Cero") i1=0;
                else
                {
                I1N=Number(I1.substring(0,I1.indexOf("/")));
                I1D=Number(I1.substring(I1.indexOf("/")+1));
                i1=I1N/I1D;
                }

                if(I2=="Puro") i2=1;
                else if(I2=="Cero") i2=0;
                else
                {
                    I2N=Number(I2.substring(0,I2.indexOf("/")));
                    I2D=Number(I2.substring(I2.indexOf("/")+1));
                    i2=I2N/I2D;
                }

                P=(i1+i2)/2;
                i=0;
                while(P%1!=0)
                {
                    P*=2;
                    i++;
                }
                Den=Math.pow(2, i);
                if(P==0) r="Cero";
                else if(Den==1) r="Puro";
                else r=P.toString()+"/"+Den.toString();
                if (r=="31/32") r="Puro por absorsión";
                document.getElementById("res").value = r;

            }
function enableOther()
			{   
                element = document.getElementById('OR');
				if (document.getElementById('R').value == 'Otra') 
                    element.style.display = 'inline';
				else
                    element.style.display = 'none';
			}