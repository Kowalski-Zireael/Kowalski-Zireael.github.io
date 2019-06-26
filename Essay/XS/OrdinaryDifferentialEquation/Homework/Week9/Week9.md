*11612733 杜子豪*

* **3.5——**

* 2.

  Solving $y''-y'-2y=0$ we get $r^2-r-2=0$ thus $r_1=2,r_2=-1$

  Hence the solution is $y(t)=c_1e^{2t}+c_2e^{-t}$ where $c_1,c_2$ are arbitrary constants

  Assume $Y(t)=At^2+Bt+C$, $Y'=2At+B$, $Y''=2A$

  Thus $2A-2At-B-2At^2-2Bt-2C=-2t+4t^2$, we get $A=-2,B=3,C=-\frac72$

  Hence $y=c_1e^{2t}+c_2e^{-t}-2t^2+3t-\frac72$ where $c_1,c_2$ are arbitrary constants

  

* 5.

  Solving $y''+2y'=0$ we get $r^2+2r=0$ thus $r_1=-2,r_2=0$

  Hence the solution is $y(t)=c_1e^{-2t}+c_2$

  Assume $Y_1(t)=A\sin2t+B\cos2t$

  $Y'=2A\cos2t-2B\sin2t$, $Y''=-4A\sin2t-4B\cos2t$

  Thus $-4(A+B)\sin2t+4(A-B)\cos2t=4\sin2t$, we get $A=B=-\frac12$

  Assume $Y_2(t)=Kt$, thus $(Kt)''+2(Kt)'=2K=3$, we get $K=\frac32$

  Hence $y=c_1e^{-2t}+c_2+\frac32t-\frac12(\sin2t+\cos2t)$ where $c_1,c_2$ are arbitrary constants

  

* 11.

  Solving $y''+y'-2y=0$ we get $r^2+r-2=0$ thus $r_1=-2,r_2=1$

  Hence the solution is $y(t)=c_1e^{-2t}+c_2e^t$ where $c_1,c_2$ are arbitrary constants

  Assume $Y(t)=At+B$, $Y'=A$, $Y''=0$

  Thus $A-2At-2B=2t$, we get $A=-1,B=-\frac12$

  Hence $y=c_1e^{-2t}+c_2e^t-t-\frac12$ where $c_1,c_2$ are arbitrary constants

  Substitute $y(0)=0,y'(0)=1$, we get $c_1+c_2=\frac12,c_2-2c_1=2$​

  Thus $c_1=-\frac12,c_2=1$ the solution is $y=-\frac12e^{-2t}+r^t-t-\frac12$

  

* 16.

  * a.

    $Y(t)=(A_1t+A_2t^2+A_3t^3+A_4t^4+A_5t^5)+(B_1t+B_2t^2+B_3t^3)e^{-3t}+C\cos3t+D\sin3t$

    

* 28.

  $y''-3y'-4y=(D-4)(D+1)y=3e^{2t}$

  Solving $u'-4u=3e^{2t}$, we get $u=ce^{4t}-\frac32e^{-2t}$ where $c$ is an arbitrary constant

  Solving $y'+y=ce^{4t}-\frac32e^{-2t}$, we get $y=c_1e^{-t}+c_2e^{4t}-\frac12e^{2t}$ 

  where $c_1,c_2$ are arbitrary constants

  

* **3.6——**

* 2.

  Solving $y''-y'-2y=0$ we get $r^2-r-2=0$ thus $r_1=2,r_2=-1$

  Hence two solutions are $y_1(t)=e^{2t},y_2=e^{-t}$

  $W[y_1,y_2]=y_1y_2'-y_2y_1'=-3e^t,g=2e^{-t}$

  $-y_1\int_{0}^{t}\frac{y_2g}{W[y_1,y_2]}ds+y_2\int_{0}^{t}\frac{y_1g}{W[y_1,y_2]}ds$

  $=-e^{2t}\int_{0}^{t}-\frac23e^{-3s}ds+e^{-t}\int_{0}^{t}-\frac23ds=\frac29y_1-\frac29y_2-\frac23te^{-t}$

  Hence $Y(t)=-\frac23te^{-t}$

  

* 4.

  Sloving $y''+y=0$ we get $r^2+1=0$ thus $r_1=i,r_2=-i$

  Hence two solutions are $y_1(t)=\cos t,y_2(t)=\sin t$

  $W[y_1,y_2]=y_1y_2'-y_2y_1'=1,g=\tan t$

  $-y_1\int_{0}^{t}\frac{y_2g}{W[y_1,y_2]}ds+y_2\int_{0}^{t}\frac{y_1g}{W[y_1,y_2]}ds$

  $=-\cos t\int_{0}^{t}\sin^2s\cos^{-1}sds+\sin t\int_{0}^{t}\sin sds=-\cos t\ln(\sec t+\tan t)-\sin t\cos t+\sin t$

  Hence $Y(t)=-\cos t\ln(\sec t+\tan t)-\sin t\cos t$

  

* 18.

  * a.

    Solving $y''+y=0$ we get $r_1=i,r_2=-i$ thus $y_1=\cos t,y_2=\sin t$

    $W[y_1,y_2]=1$

    $Y(t)=\int_{t_0}^{t}(\cos s\sin t-\cos t\sin s)g(s)ds=\int_{t_0}^{t}\sin(t-s)g(s)ds$

    $Y(t_0)=0,Y'(t_0)=0$

  * b.

    Solving $L(u)=0,u(0)=y_0,u'(0)=y_0'$ we get $r_1=i,r_2=-i$ 

    Thus $u(t)=y_0\cos t+y_0'\sin t$ where $c_1,c_2$ are arbitrary constants

    Solving $L(v)=g(t),v(0)=0,v'(0)=0$ we get $v(t)=\int_{t_0}^{t}\sin(t-s)g(s)ds$

    Hence the solution is $y=\int_{t_0}^{t}\sin(t-s)g(s)ds+y_0\cos t+y_0'\sin t$

    

* 24.

  The equation can be transformed into $y''-\frac2ty'+\frac2{t^2}y=4$

  Let $y=tv(t)$ we get $tv''=4$ 

  Hence $v=4t\ln t+c_1t+c_2$, weget $y=4t^2\ln t+c_1t^2+c_2t$

  

* **3.7——**

* 3.

  Since there is no damping, $mu''+ku(t)=0$

  $mg=kL$ and we get $k=mg/L=1/0.05=20N/m$

  Hence $0.1u''+20u=0$ and solving this we get $u=c_1\cos10\sqrt2t+c_2\sin10\sqrt2t$ 

  where $c_1,c_2$ are arbitrary constants

  Substitute $y(0)=0,y'(0)=0.1$ we get $c_1=0,c_2=\frac1{100\sqrt2}$

  Hence $u=\frac{\sqrt2}2\sin10\sqrt2t$ with $u$ in $cm$ and $t$ in $s$

  When $u=0$, we get $t=k\pi/(10\sqrt2)$ for $k=0,1,...$ 

  Thus the first returning to its equilibrium, $t=\frac{\sqrt2}{20}\pi$

  

* 8.

  $T_d/T=(1-\frac{\gamma^2}{4km})^{-\frac12}=1/\sqrt{1-\frac14\gamma^2}=1.5$

  Thus $\gamma=\sqrt\frac{20}{9}$

  

* 17.

  Solving $\frac32u''+ku=0$ we get $u=c_1\cos\omega t+c_2\sin\omega t$

  where $c_1,c_2$ are arbitrary constants and $\omega^2=2k/3$

  Substitute $u(0)=2$, we get $c_1=2$ 

  Since $3=\sqrt{c_1^2+c_2^2}=\sqrt{4+c_2^2}$, we get $c_2=\pm\sqrt5$

  Since $T=\pi=2\pi/\omega$, we get $k=6$

  Thus $u=2\cos2t\pm\sqrt5\sin2t$ and $u'(0)=v=\pm2\sqrt5$

  

* 18.

  * a.

    Solving $mu''+\gamma u'+ku=0$ since $\gamma^2-4km<0$ we get $u=c_1e^{\lambda t}\cos\mu t+c_2e^{\lambda t}\sin\mu t$

    where $c_1,c_2$ are arbitrary constants and $\mu=\frac1{2m}(4km-\gamma^2)^{\frac12},\lambda=-\gamma/(2m)$

    Substitute $u(0)=u_0,u'(0)=v_0$ we get $c_1=u_0,c_2=(v_0-u_0\lambda)/\mu$

    Hence $u=u_0e^{\lambda t}\cos\mu t+\frac{v_0-\lambda u_0}\mu e^{\lambda t}\sin\mu t$ where $\mu=\frac1{2m}(4km-\gamma^2)^{\frac12},\lambda=-\gamma t/(2m)$

  * b.

    $R^2=c_1^2+c_2^2=4m(mv_0^2+\gamma v_0u_0+ku_0^2)/(4km-\gamma^2)$

  * c.

    Let $r(\gamma)=\frac{A+B\gamma}{C-\gamma^2}$ where $A,B,C>0$

    $r'(\gamma)=\frac{B(C-\gamma^2)+2(A+B\gamma)\gamma}{(C-\gamma^2)^2}=\frac{BC+2A\gamma+B\gamma^2}{(C-\gamma^2)^2}>0$

    Hence $R$ increases as $\gamma$ increases

    

* 23.

  $ma=mu''=F_{total}=-ku-\gamma u'$ which is equivalent to equation (21)

  In this case the equilibrium position is just the position that 

  makes the spring unstretched or uncompressed

  However, in the text, the equilibrium position balance the gravity

