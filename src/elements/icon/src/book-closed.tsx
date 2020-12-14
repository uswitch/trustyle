/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const BookClosed: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 32 32"
  >
    <path d="M5.6 26.5V26.382L5.54721 26.2764C5.51347 26.2089 5.50805 26.1819 5.5057 26.1678C5.50128 26.1413 5.5 26.1098 5.5 26V6C5.5 4.07614 7.07614 2.5 9 2.5H25.5V29.5H9.1H9.09997H9.09995H9.09991H9.09988H9.09983H9.09978H9.09972H9.09966H9.09959H9.09951H9.09943H9.09934H9.09924H9.09913H9.09902H9.09891H9.09878H9.09865H9.09851H9.09837H9.09822H9.09806H9.0979H9.09773H9.09756H9.09737H9.09719H9.09699H9.09679H9.09658H9.09637H9.09615H9.09592H9.09569H9.09545H9.09521H9.09495H9.0947H9.09443H9.09416H9.09389H9.09361H9.09332H9.09303H9.09273H9.09242H9.09211H9.09179H9.09147H9.09114H9.0908H9.09046H9.09011H9.08976H9.0894H9.08903H9.08866H9.08828H9.0879H9.08751H9.08712H9.08672H9.08631H9.0859H9.08548H9.08506H9.08463H9.0842H9.08376H9.08331H9.08286H9.08241H9.08195H9.08148H9.08101H9.08053H9.08004H9.07955H9.07906H9.07856H9.07805H9.07754H9.07702H9.0765H9.07598H9.07544H9.07491H9.07436H9.07382H9.07326H9.0727H9.07214H9.07157H9.071H9.07042H9.06983H9.06924H9.06865H9.06805H9.06744H9.06683H9.06622H9.0656H9.06497H9.06434H9.06371H9.06307H9.06242H9.06178H9.06112H9.06046H9.0598H9.05913H9.05845H9.05778H9.05709H9.0564H9.05571H9.05501H9.05431H9.0536H9.05289H9.05218H9.05146H9.05073H9.05H9.04927H9.04853H9.04778H9.04703H9.04628H9.04552H9.04476H9.044H9.04322H9.04245H9.04167H9.04089H9.0401H9.03931H9.03851H9.03771H9.0369H9.03609H9.03528H9.03446H9.03364H9.03281H9.03198H9.03114H9.03031H9.02946H9.02861H9.02776H9.02691H9.02605H9.02518H9.02432H9.02344H9.02257H9.02169H9.02081H9.01992H9.01903H9.01813H9.01723H9.01633H9.01542H9.01451H9.0136H9.01268H9.01176H9.01083H9.0099H9.00897H9.00803H9.00709H9.00614H9.0052H9.00424H9.00329H9.00233H9.00137H9.0004H8.99943H8.99846H8.99748H8.9965H8.99552H8.99453H8.99354H8.99255H8.99155H8.99055H8.98954H8.98854H8.98753H8.98651H8.9855H8.98447H8.98345H8.98242H8.98139H8.98036H8.97932H8.97828H8.97724H8.97619H8.97515H8.97409H8.97304H8.97198H8.97092H8.96985H8.96879H8.96772H8.96664H8.96557H8.96449H8.9634H8.96232H8.96123H8.96014H8.95905H8.95795H8.95685H8.95575H8.95464H8.95354H8.95242H8.95131H8.9502H8.94908H8.94796H8.94683H8.94571H8.94458H8.94344H8.94231H8.94117H8.94003H8.93889H8.93775H8.9366H8.93545H8.9343H8.93315H8.93199H8.93083H8.92967H8.92851H8.92734H8.92617H8.925H8.92383H8.92265H8.92147H8.92029H8.91911H8.91793H8.91674H8.91555H8.91436H8.91317H8.91197H8.91078H8.90958H8.90838H8.90717H8.90597H8.90476H8.90355H8.90234H8.90113H8.89991H8.8987H8.89748H8.89626H8.89503H8.89381H8.89258H8.89136H8.89013H8.88889H8.88766H8.88643H8.88519H8.88395H8.88271H8.88147H8.88022H8.87898H8.87773H8.87648H8.87523H8.87398H8.87273H8.87148H8.87022H8.86896H8.8677H8.86644H8.86518H8.86392H8.86265H8.86139H8.86012H8.85885H8.85758H8.85631H8.85504H8.85376H8.85249H8.85121H8.84993H8.84865H8.84737H8.84609H8.84481H8.84353H8.84224H8.84096H8.83967H8.83838H8.83709H8.8358H8.83451H8.83322H8.83193H8.83064H8.82934H8.82805H8.82675H8.82545H8.82415H8.82285H8.82155H8.82025H8.81895H8.81765H8.81635H8.81504H8.81374H8.81243H8.81113H8.80982H8.80851H8.80721H8.8059H8.80459H8.80328H8.80197H8.80066H8.79935H8.79804H8.79672H8.79541H8.7941H8.79279H8.79147H8.79016H8.78884H8.78753H8.78621H8.7849H8.78358H8.78227H8.78095H8.77963H8.77832H8.777H8.77568H8.77436H8.77305H8.77173H8.77041H8.76909H8.76777H8.76645H8.76514H8.76382H8.7625H8.76118H8.75986H8.75854H8.75723H8.75591H8.75459H8.75327H8.75195H8.75064H8.74932H8.748H8.74668H8.74537H8.74405H8.74273H8.74142H8.7401H8.73879H8.73747H8.73616H8.73484H8.73353H8.73221H8.7309H8.72959H8.72828H8.72696H8.72565H8.72434H8.72303H8.72172H8.72041H8.7191H8.71779H8.71649H8.71518H8.71387H8.71257H8.71126H8.70996H8.70865H8.70735H8.70605H8.70475H8.70345H8.70215H8.70085H8.69955H8.69825H8.69695H8.69566H8.69436H8.69307H8.69178H8.69049H8.6892H8.68791H8.68662H8.68533H8.68404H8.68276H8.68147H8.68019H8.67891H8.67762H8.67635H8.67507H8.67379H8.67251H8.67124H8.66996H8.66869H8.66742H8.66615H8.66488H8.66361H8.66235H8.66108H8.65982H8.65856H8.6573H8.65604H8.65478H8.65352H8.65227H8.65102H8.64977H8.64852H8.64727H8.64602H8.64477H8.64353H8.64229H8.64105H8.63981H8.63857H8.63734H8.63611H8.63487H8.63364H8.63242H8.63119H8.62997H8.62874H8.62752H8.6263H8.62509H8.62387H8.62266H8.62145H8.62024H8.61903H8.61783H8.61662H8.61542H8.61422H8.61302H8.61183H8.61064H8.60945H8.60826H8.60707H8.60589H8.60471H8.60353H8.60235H8.60117H8.6C6.88543 29.5 5.6 28.1332 5.6 26.5ZM24.5 4V3.5H24H9C7.62386 3.5 6.5 4.62386 6.5 6V23.4V24.2831L7.25725 23.8287C7.66525 23.5839 8.07237 23.5 8.5 23.5H23.9H24H24.5V23V4ZM6.3 26.5V26.57L6.31924 26.6374C6.56971 27.514 7.31033 28.243 8.27873 28.4851L8.33845 28.5H8.4H23.9C24.0125 28.5 24.1301 28.4704 24.2352 28.4004C24.3371 28.3324 24.3988 28.2454 24.4347 28.1736C24.4696 28.1037 24.4846 28.0399 24.4916 27.9978C24.4953 27.9756 24.4974 27.9559 24.4985 27.9399C24.4991 27.9318 24.4995 27.9244 24.4997 27.9178L24.4999 27.9083L24.5 27.904L24.5 27.902L24.5 27.901L24.5 27.9005C24.5 27.9002 24.5 27.9 24 27.9H24.5V25.1C24.5 24.9875 24.4704 24.8699 24.4004 24.7649C24.3325 24.6629 24.2454 24.6012 24.1736 24.5653C24.1038 24.5304 24.04 24.5154 23.9979 24.5084C23.9756 24.5047 23.956 24.5026 23.9399 24.5015C23.9319 24.5009 23.9244 24.5005 23.9178 24.5003L23.9084 24.5001L23.9041 24.5L23.902 24.5L23.901 24.5L23.9005 24.5C23.9003 24.5 23.9 24.5 23.9 25L23.9 24.5H8.3C7.22386 24.5 6.3 25.4239 6.3 26.5Z" />
    <path d="M10.5 12.5V7.5H20.5V12.5H10.5Z" />
  </svg>
)
