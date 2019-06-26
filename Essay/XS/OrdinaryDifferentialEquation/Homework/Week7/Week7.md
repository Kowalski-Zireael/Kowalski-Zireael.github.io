*11612733 杜子豪*

* **3.1——**

* 2.

  $r^2+3r+2=0​$, hence $r_1=-1,r_2=-2​$

  It follows that $y_1=e^{-t},y_2=e^{-2t}$

  Hence the general solution is $y=c_1e^{-t}+c_2e^{-2t}$ where $c_1,c_2$ are arbitrary constants

  

* 4.

  $r^2+5r=0$, hence $r_1=0,r_2=-5$

  It follows that $y_1=1,y_2=e^{-5t}$

  Hence the general solution is $y=c_1+c_2e^{-5t}$ where $c_1,c_2$ are arbitrary constants

  

* 15.

  $2r^2-3r+1=0$, hence $r_1=\frac12,r_2=1$

  It follows that $y_1=e^{\frac12t},y_2=e^t$

  Hence the general solution is $y=c_1e^{\frac12t}+c_2e^t$ where $c_1,c_2$ are arbitrary constants

  Substituting $y(0)=2,y'(0)=\frac12$, we get $c_1+c_2=2,\frac12c_1+c_2=\frac12$

  Hence $c_1=3,c_2=-1$, $y=3e^{\frac12t}-e^t$

  $y'=\frac32e^{\frac12t}-e^t$, when $y'=0,e^{\frac12t}=\frac32$, hence $t=\ln\frac94,y(t)=\frac94$

  When $y=0,e^{\frac12t}=3$, hence $t=\ln9$

  

* 16.

  $r^2-r-2=0$, hence $r_1=2,r_2=-1$

  It follows that $y_1=e^{2t},y_2=e^{-t}$

  Hence the general solution is $y=c_1e^{2t}+c_2e^{-t}$ where $c_1,c_2$ are arbitrary constants

  Substituting $y(0)=\alpha,y'(0)=2$, we get $c_1+c_2=\alpha,2c_2-c_2=2$

  Hence $c_1=\frac{2+\alpha}3,c_2=\frac{2\alpha-2}3,y=\frac{2+\alpha}3e^{2t}+\frac{2\alpha-2}3e^{-t}$

  Since $t\to\infty,y\to0$, we get $\frac{2+\alpha}3=0,\frac{2\alpha-2}3\not=0$

  Hence $\alpha=-2$

  

* 18.

  $r^2+(3-\alpha)r-2(\alpha-1)=0$, hence $r_1=\alpha-1,r_2=-2$

  It follows that $y_1=e^{-2t},y_2=e^{(\alpha-1)t}$

  Hence the general solution is $y=c_1e^{-2t}+c_2e^{(\alpha-1)t}$ where $c_1,c_2$ are arbitrary constants

  If $\alpha-1>0$ which is $\alpha>1$, 

  ​	If $c_2\not=0,y\to\infty$ as $t\to\infty$

  ​	However if $c_2=0,y\to0$ as $t\to\infty$

  ​	Hence, such $\alpha$ that makes all solution unbounded when $t\to\infty$ does not exist

  If $\alpha-1<0$ which is $\alpha<1$

  ​	$y\to0$ as $t\to\infty$

   

* **3.2——**

* 7.

  $t(t-4)y''+3ty'+4y=2\Rightarrow y''+\frac{3t}{t(t-4)}y'+\frac4{t(t-4)}y=\frac2{t(t-4)}​$

  Let $p(t)=\frac{3t}{t(t-4)},q(t)=\frac4{t(t-4)},g(t)=\frac2{t(t-4)}$

  Thus $p,q,g$ is continuous on $(-\infty,0),(0,4),(4,+\infty)$

  Since $y(3)=0,y'(3)=-1$, the maximum existence interval is $(0,4)$

  

* 9.

  $(x-2)y''+y'+(x-2)(\tan x)y=0\Rightarrow y''+\frac1{x-2}y'+(\tan x)y=0$

  Let $p(t)=\frac 1{x-2},q(t)=\tan x$

  Thus $p,q$ is continuous on $(-\frac \pi2+k\pi,\frac\pi2+k\pi)(k\in\Z,k\not=1),(\frac\pi2,2),(2,\frac{3\pi}2)$

  Since $y(3)=1,y'(3)=2$, the maximum existence interval is $(2,\frac32\pi)$

  

* 14.

  $f'=2e^{2t}$ thus suppose $g$ and $g'$

  $W[f,g]=3e^{4t}=fg'-f'g=e^{2t}g'-2e^{2t}g$

  We get $g'-2g=3e^{2t}\Rightarrow e^{-2t}g'-2e^{-2}g=3\Rightarrow (e^{-2t}g)'=3\Rightarrow g=3te^{2t}+ce^{2t}$

  ​	where $c​$ is an arbitrary constant

  

* 16.

  $y_3’=a_1y_1'+a_2y_2',y_4'=b_1y_1'+b_2y_2'$

  $W[y_3,y_4]=y_3y_4'-y_4y_3'=(a_1y_1+a_2y_2)(b_1y_1'+b_2y_2')-(b_1y_1+b_2y_2)(a_1y_1'+a_2y_2')$

  which equals $(a_1b_2-b_1a_2)y_1y_2'+(a_2b_1-a_1b_2)y_2y_1'=(a_1b_2-a_2b_1)W[y_1,y_2]$

  If $a_1b_2\not=a_2b_1,\;y_3,y_4$ is also a fundamental set of soluiton

  If not, then $y_3,y_4$ is not such set

  

* 25.

  $p(t)=\frac{2x}{x^2-1}$

  $W[y_1,y_2](t)=c\exp (-\int p(t)dt)=c\exp(-\ln(x^2-1))=\frac c{x^2-1}$ where $c$ is an arbitrary constant

  

* **3.3——**

* 8.

  $r^2+6r+13=0$, hence $r_1=-3-2i,r_2=-3+2i$

  It follows that $y_1=e^{-3t}\cos(2t),y_2=e^{-3t}\sin(2t)$

  Hence, the general solution is $y=c_1e^{-3t}\cos(2t)+c_2e^{-3t}\sin(2t)$ where $c_1,c_2$ are arbitrary constants

  

* 21.

  $e^{it}=\sum_{n=0}^{\infty}\frac{(it)^n}{n!}=\sum_{k=0}^{\infty}\frac{(-1)^kt^{2k}}{(2k)!}+i\sum_{k=0}^{\infty}\frac{(-1)^kt(2k+1)}{(2k+1)!}=\cos t+i\sin t​$

  $e^{-it}=\sum_{n=0}^{\infty}\frac{(it)^n}{n!}=\sum_{k=0}^{\infty}\frac{(-1)^kt^{2k}}{(2k)!}+i\sum_{k=0}^{\infty}\frac{(-1)^{(k+1)}t(2k+1)}{(2k+1)!}=\cos t-i\sin t$

  Hence $\frac{e^{-it}+e^{-it}}2=\cos t,\frac{e^{it}-e^{-it}}2=\sin t$

  

* 23.

  $u'(t)=\lambda e^{\lambda t}\cos(\mu t)-e^{\lambda t}\mu\sin(\mu t)=\lambda u(t)-\mu v(t)$

  $v'(t)=\lambda e^{\lambda t}\sin(\mu t)+e^{\lambda t}\mu\cos(\mu t)=\lambda v(t)+\mu u(t)​$

  $u''(t)=\lambda(\lambda u(t)-\mu v(t))-\mu(\lambda v(t)+\mu u(t))=(\lambda^2-\mu^2)u(t)-2\mu\lambda v(t)$

  $v''(t)=\lambda(\lambda v(t)+\mu u(t))+\mu(\lambda u(t)-\mu v(t))=(\lambda^2-\mu^2)v(t)+2\mu\lambda u(t)$

  Since $\lambda=-\frac b{2a},\mu=\pm\frac{\sqrt{4ac-b^2}}{2a}​$

  $au''+bu'+cu=[a(\lambda^2-\mu^2)+b\lambda+c]u-[a2\mu\lambda+b\mu]v​$

  ​	$=[\frac{b^2}{4a}-\frac{4ac-b^2}{4a}-\frac{b^2}{2a}+c]u-[\frac{-b\sqrt{4ac-b^2}}{2a}+\frac{b\sqrt{4ac-b^2}}{2a}]v=0$

  $av''+bv'+cv=[a(\lambda^2-\mu^2)+b\lambda+c]v+[a2\mu\lambda+b\mu]u​$

  ​	$=[\frac{b^2}{4a}-\frac{4ac-b^2}{4a}-\frac{b^2}{2a}+c]v+[\frac{-b\sqrt{4ac-b^2}}{2a}+\frac{b\sqrt{4ac-b^2}}{2a}]u=0$

  which implies $u(t),v(t)$ are solutions

  

* 25.

  * a.

    $dy/dt=(dy/dx)(dx/dt)=t^{-1}{dy/dx},\;d^2y/dt^2=[d(t^{-1}dy/dx)/dx](dx/dt)$

    which is $t^{-1}(-t^{-1}dy/dx+t^{-1}d^2y/dx^2)=t^{-2}(d^2y/dx^2-dy/dx)$

  * b.

    The equation can transformed into 

    ​	$\frac{d^2y}{dx^2}-\frac{dy}{dx}+\alpha\frac{dy}{dx}+\beta y=0$

    which is equation $(34)$

    

* 27.

  The equation can be transformed into $y''+3y'+2y=0$

  $r^2+3r+2=0$, hence $r_1=-1,r_2=-2$

  It follows that $y_1=e^{-x},\;y_2=e^{-2x}$ which is $y_1=t^{-1},\;y_2=t^{-2}$

  Hence the general solution is $y=c_1t^{-1}+c_2t^{-2}$ where $c_1,c_2$ are arbitrary constants

  

* **3.4——**

* 6.

  $4r^2+17r+4=0$, hence $r_1=-\frac14,\;r_2=-4$

  It follows that $y_1=e^{-t/4},\;y_2=e^{-4t}$

  Hence the general solution is $y=c_1e^{-t/4}+c_2e^{-4t}$ where $c_1,c_2$ are arbitrary constants

  

* 12.

  $r^2-r+\frac14=0$, hence $r_1=r_2=\frac12$

  It follows that $y_1=e^{t/2}$

  Let $y=v(t)e^{t/2}$, $y'=v'e^{t/2}+\frac12ve^{t/2}=(v'+\frac12v)e^{t/2},\;y''=(v''+v'+\frac14v)e^{t/2}$

  We can get $v''+v'+\frac14-v'-\frac12+\frac14=0$ which is $v''=0$

  Hence $v(t)=c_1+c_2t,\;y=c_1e^{t/2}+c_2te^{t/2}$ where $c_1,c_2$ are arbitrary constants

  Substituting $y(0)=2,\;y'(0)=b$, we get $c_1=2,\;c_2=b-1​$

  Hence $y=2e^{t/2}+(b-1)te^{t/2}$

  Thus the critical value of $b​$ is 1

  

* 15.

  * a.

    $r^2+2ar+a^2=0$, hence $r_1=r_2=-a$

  * b.

    $p(t)=2a$

    $W(t)=c\exp(-\int p(t)dt)=ce^{-2at}$ where $c$ is an arbitrary constant

  * c.

    $y_1(t)y_2'(t)-y_2(t)y_1'(t)=e^{-at}y_2'+ae^{-at}y_2=ce^{-2at}$

    Hence $y_2'+ay_2=ce^{-at}\Rightarrow e^{at}y_2'+ae^{at}y_2=c\Rightarrow (e^{at}y_2)'=c$

    We get $y_2=c_1te^{-at}+c_2e^{-at}$ where $c_1,c_2$ are arbitrary constants

    Now let $c_1=1,\;c_2=0$, $y_2(t)=te^{-at}$

    

* 20.

  $y''+\frac{3}{t}y'+\frac1{t^2}y=0​$, let $y(t)=v(t)y_1(t)=\frac vt​$

  Substituting $y=\frac vt$, we get $v''t^{-1}+(-2t^{-2}+3t^{-2})v'=0$

  Hence $v''+t^{-1}v'=0$ and we get $v'=c_1t^{-1}$, it follows that $v=c_1\int t^{-1}dt=c_1\ln t+c_2$

  Here $c_1,c_2$ are arbitrary constants

  $y=c_1t^{-1}\ln t+c_2t^{-1}$, the secend solution is $y_2=t^{-1}\ln t$

  

* 28.

  Suppose $r_1,r_2$ are the roots of $ar^2+br+c=0$

  If $r_1,r_2\in\R$, $y=c_1e^{r_1t}+c_2e^{r_2t}$

  ​	$r_1=\frac{-b+\sqrt{b^2-4ac}}{2a}<0,\;r_2=\frac{-b-\sqrt{b^2-4ac}}{2a}<0$

  ​	Hence $y\to0$ as $t\to\infty$

  If $r_1,r_2\notin\R$, $r_1=\lambda+i\mu,\;r_2=\lambda-i\mu$ where $\lambda,\mu\in\R$

  ​	$y=c_1e^{\lambda t}\cos(\mu t)+c_2e^{\lambda t}\sin(\mu t)$

  ​	Since $\lambda=-\frac{b}{2a}<0$ and $\cos (\mu t),\sin(\mu t)$ are bounded

  ​	$y\to0$ as $t\to\infty$

  If $r_1=r_2$, $y=c_1e^{r_1t}+c_2te^{r_1t}$

  ​	$r_1=r_2=-\frac{b}{2a}<0$

  ​	Since $\lim_{t\to\infty}\frac{t}{e^{-r_1t}}=\lim_{t\to\infty}\frac{t'}{(e^{-r_1t})'}=\lim_{t\to\infty}\frac1{-r_1e^{-r_1t}}=0$

  ​	Hence $y\to0$ as $t\to\infty$

  

