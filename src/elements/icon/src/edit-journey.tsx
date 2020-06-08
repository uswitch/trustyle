/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const EditJourney: React.FC<Props> = ({ color, size: iconSize }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(iconSize)
    }}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.5464 10.2535L28.5568 10.2639L28.5678 10.2737C29.1966 10.8326 29.195 11.9818 28.3655 12.7284L28.3557 12.7372L28.3464 12.7465L13.7464 27.3464L13.7269 27.366L13.7096 27.3876C13.4278 27.7398 12.9834 27.9116 12.4256 28.0055L2.55517 29.3215L3.49614 19.0649C3.58326 18.5654 3.83655 18.0706 4.15356 17.7535L4.15477 17.7523L18.6536 3.15354C18.6537 3.15334 18.6539 3.15315 18.6541 3.15295C19.0717 2.73567 19.6481 2.5 20.1 2.5C20.5763 2.5 20.9463 2.65345 21.2464 2.95356L28.5464 10.2535ZM3.70225 27.5526L3.64247 28.1803L4.26728 28.0955L12.3338 27H12.4H13.6071L12.7536 26.1464L5.35355 18.7465L4.5 17.8929V19.1V19.1762L3.70225 27.5526ZM13.5464 25.5535L13.9 25.9071L14.2536 25.5535L27.6536 12.1535C27.8405 11.9666 27.9225 11.7464 27.9601 11.5963C27.9796 11.5183 27.9894 11.4501 27.9944 11.3997C27.9969 11.3743 27.9983 11.3528 27.9991 11.336L27.9998 11.3143L28 11.3062L28 11.3028L28 11.3014L28 11.3007V11.3003C28 11.3002 28 11.3 27.5 11.3H28V11.0929L27.8536 10.9464L20.6536 3.74645L20.5071 3.60001H20.3H20.2994H20.2988H20.2983H20.2977H20.2971H20.2965H20.296H20.2954H20.2948H20.2943H20.2937H20.2931H20.2926H20.292H20.2915H20.2909H20.2904H20.2898H20.2893H20.2887H20.2882H20.2877H20.2871H20.2866H20.2861H20.2855H20.285H20.2845H20.284H20.2834H20.2829H20.2824H20.2819H20.2814H20.2809H20.2804H20.2798H20.2793H20.2788H20.2783H20.2778H20.2774H20.2769H20.2764H20.2759H20.2754H20.2749H20.2744H20.2739H20.2735H20.273H20.2725H20.272H20.2716H20.2711H20.2706H20.2702H20.2697H20.2693H20.2688H20.2683H20.2679H20.2674H20.267H20.2665H20.2661H20.2657H20.2652H20.2648H20.2643H20.2639H20.2635H20.263H20.2626H20.2622H20.2618H20.2613H20.2609H20.2605H20.2601H20.2597H20.2592H20.2588H20.2584H20.258H20.2576H20.2572H20.2568H20.2564H20.256H20.2556H20.2552H20.2548H20.2544H20.254H20.2536H20.2533H20.2529H20.2525H20.2521H20.2517H20.2513H20.251H20.2506H20.2502H20.2499H20.2495H20.2491H20.2488H20.2484H20.248H20.2477H20.2473H20.247H20.2466H20.2463H20.2459H20.2456H20.2452H20.2449H20.2445H20.2442H20.2439H20.2435H20.2432H20.2428H20.2425H20.2422H20.2419H20.2415H20.2412H20.2409H20.2406H20.2402H20.2399H20.2396H20.2393H20.239H20.2387H20.2384H20.238H20.2377H20.2374H20.2371H20.2368H20.2365H20.2362H20.2359H20.2356H20.2353H20.2351H20.2348H20.2345H20.2342H20.2339H20.2336H20.2333H20.2331H20.2328H20.2325H20.2322H20.2319H20.2317H20.2314H20.2311H20.2309H20.2306H20.2303H20.2301H20.2298H20.2295H20.2293H20.229H20.2288H20.2285H20.2283H20.228H20.2278H20.2275H20.2273H20.227H20.2268H20.2265H20.2263H20.2261H20.2258H20.2256H20.2253H20.2251H20.2249H20.2246H20.2244H20.2242H20.224H20.2237H20.2235H20.2233H20.2231H20.2228H20.2226H20.2224H20.2222H20.222H20.2218H20.2216H20.2213H20.2211H20.2209H20.2207H20.2205H20.2203H20.2201H20.2199H20.2197H20.2195H20.2193H20.2191H20.2189H20.2187H20.2185H20.2184H20.2182H20.218H20.2178H20.2176H20.2174H20.2172H20.2171H20.2169H20.2167H20.2165H20.2164H20.2162H20.216H20.2158H20.2157H20.2155H20.2153H20.2152H20.215H20.2148H20.2147H20.2145H20.2143H20.2142H20.214H20.2139H20.2137H20.2136H20.2134H20.2132H20.2131H20.2129H20.2128H20.2126H20.2125H20.2124H20.2122H20.2121H20.2119H20.2118H20.2116H20.2115H20.2114H20.2112H20.2111H20.211H20.2108H20.2107H20.2106H20.2104H20.2103H20.2102H20.21H20.2099H20.2098H20.2097H20.2095H20.2094H20.2093H20.2092H20.2091H20.2089H20.2088H20.2087H20.2086H20.2085H20.2084H20.2083H20.2082H20.208H20.2079H20.2078H20.2077H20.2076H20.2075H20.2074H20.2073H20.2072H20.2071H20.207H20.2069H20.2068H20.2067H20.2066H20.2065H20.2064H20.2063H20.2062H20.2061H20.2061H20.206H20.2059H20.2058H20.2057H20.2056H20.2055H20.2054H20.2054H20.2053H20.2052H20.2051H20.205H20.205H20.2049H20.2048H20.2047H20.2046H20.2046H20.2045H20.2044H20.2043H20.2043H20.2042H20.2041H20.2041H20.204H20.2039H20.2039H20.2038H20.2037H20.2037H20.2036H20.2035H20.2035H20.2034H20.2033H20.2033H20.2032H20.2032H20.2031H20.2031H20.203H20.2029H20.2029H20.2028H20.2028H20.2027H20.2027H20.2026H20.2026H20.2025H20.2025H20.2024H20.2024H20.2023H20.2023H20.2022H20.2022H20.2021H20.2021H20.202H20.202H20.202H20.2019H20.2019H20.2018H20.2018H20.2018H20.2017H20.2017H20.2016H20.2016H20.2016H20.2015H20.2015H20.2015H20.2014H20.2014H20.2014H20.2013H20.2013H20.2013H20.2012H20.2012H20.2012H20.2011H20.2011H20.2011H20.201H20.201H20.201H20.201H20.2009H20.2009H20.2009H20.2009H20.2008H20.2008H20.2008H20.2008H20.2007H20.2007H20.2007H20.2007H20.2007H20.2006H20.2006H20.2006H20.2006H20.2006H20.2005H20.2005H20.2005H20.2005H20.2005H20.2005H20.2004H20.2004H20.2004H20.2004H20.2004H20.2003H20.2003H20.2003H20.2003H20.2002H20.2002H20.2002H20.2002H20.2002H20.2001H20.2001H20.2001H20.2001H20.2001H20.2001H20.2H20.2H20.2C20.1979 3.60001 20.1957 3.6 20.1934 3.6C20.1351 3.59989 20.0046 3.59965 19.8518 3.66075C19.7031 3.72023 19.5726 3.82028 19.4464 3.94643L19.8 4.29999L19.4464 3.94643L6.04645 17.3464L5.69289 17.7L6.04645 18.0535L13.5464 25.5535Z"
      fill={color}
      stroke={color}
    />
  </svg>
)
