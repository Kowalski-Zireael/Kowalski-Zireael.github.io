*11612733 杜子豪*

* **1.1——**

* 2.

  ![](D:\kowalski\SUSTech\OrdinaryDifferentialEquation\Homework\Week1\1.1-2.jpg)

  All the solution will diverge from $y=3/2$

  For $y(0)>3/2$, $y\to+\infty$, as $t\to\infty$

  For $y(0)>3/2$, $y\to-\infty$, as $t\to\infty$

  

* 9.

  ![](D:\kowalski\SUSTech\OrdinaryDifferentialEquation\Homework\Week1\1.1-9.jpg)

  For $y(0)>0$, $y\to+\infty$, as $t\to\infty$

  For $y(0)=0$, $y(t)\equiv0$

  For $y(0)<0$, $y\to+\infty$, as $t\to\infty$

  

* 12.

  As shown in the direction field, all the solution diverge from $y=2$. 

  Thus, $y'=0$, when $y=2$

  Hence, (c).(j). may be the matched equation

  Since, for $y>0$, $y'>0$

  (j): $y'=2-y$ is not appropriate

  Hence, (c): $y'=y-2​$ is the matched equation

  

* 15.

  As shown in the direction field, the solution contains $y=3$ and $y=0$

  Thus, $y'=0$, when $y=2$ or $y=0$

  Hence, (e).(h). may be the matched equation

  Since, for $y<0$, $y'<0$

  (e): $y'=y(y-3)$ is not appropriate

  Hence, (h): $y'=y(3-y)$ is the matched equation

  

* 18.

  Assume the radius of the raindrop is $r$

  The surface area $S=4\pi r^2$

  $dV/dt=-k\cdot S​$

  Since $V=\frac{4}{3}\pi r^3$, $r=(\frac{3V}{4\pi})^{\frac{1}{3}}$

  Hence, $\frac{dV}{dt}=-k\cdot(6V\sqrt{(\pi)})^{2/3}=-c\cdot V^{\frac{2}{3}}$ for some $c>0$

  

* **1.2——**

* 1.

  * a.

    $dy/dt=-y+5\Rightarrow dy/(y-5)=-dt\Rightarrow d\ln{|y-5|}=-dt$

    Integral both sides, we get $\ln{|y-5|}=-t+C$ where $C$ is an arbitrary constant

    Hence $y=\pm e^{-t+C}+5\Rightarrow y=ce^{-t}+5$ where $c=\pm e^{C}$

    Substitution $y(0)=y_0$, we get $c=y_0-5​$ 

    Hence $y=(y_0-5)e^{-t}+5$

    For $y'=0$ we get equilibrium solution $y=5\Rightarrow y(0)=5$

    If $y_0>5$, $c>0$, $y$ decreases as $t$ increases and approach to 0

    If $y_0<5$, $c<0$, $y$ increases as $t$ increases and approach to 0

    Hence, all the solution converge to $y=5$

    

* 2.

  * b.

    $dy/dt=2y+5\Rightarrow dy/(y-5/2)=2dt\Rightarrow d\ln{|y-5/2|}=2dt​$

    Integral both sides, we get $\ln{|y-5/2|}=2t+C$ where $C$ is an arbitrary constant

    Hence $y=\pm e^{2t+C}+\frac{5}{2}\Rightarrow y=ce^{2t}+\frac{5}{2}$ where $c=\pm e^{C}$

    Substitution $y(0)=y_0$, we get $c=y_0-\frac{5}{2}$ 

    Hence $y=(y_0-\frac{5}{2})e^{-t}+\frac{5}{2}​$

    For $y'=0$ we get equilibrium solution $y=5/2\Rightarrow y(0)=5/2$

    If $y_0>\frac{5}{2}​$, $c>0​$, $y​$ increases as $t​$ increases and approach to 0

    If $y_0<\frac{5}{2}​$, $c<0​$, $y​$ decreases as $t​$ increases and approach to 0

    Hence, all the solution diverge from $y=\frac{5}{2}$

    

* 7.

  $dp/dt=0.5p-450\Rightarrow \frac{dp/dt}{p-900}=\frac{1}{2}\Rightarrow d(\ln|p-900|)=\frac{1}{2}dt$

  We get $p=ce^{\frac{1}{2}t}+900$ where $c$ is an arbitrary constant

  * a.

    Since $p(0)=850$, $c=850-900=-50$

    $p=-50e^{\frac{1}{2}t}+900$

    Substitute $p=0$, we get $50e^{\frac{1}{2}t}=900$

    Solve the equation, we get $t=2\ln18$ 

    which implies that mouse will extinct at $2\ln18​$ months

  * b.

    Since $p(0)=p_0\;(0<p_0<900)$, $c=p_0-900$ and $-900<c<0$

    $p=(p_0-900)e^{\frac{1}{2}t}+900$

    Substitute $p=0$, we get $(900-p_0)e^{\frac{1}{2}t}=900$

    Solve the equation, we get $t=2\ln(\frac{900}{900-p_0})$ 

    which implies that mouse will extinct at $2\ln(\frac{900}{900-p_0})$ months

    

* 8.

  $\frac{dv}{dt}=9.8-\frac{v}{5}\Rightarrow \frac{dv}{v-49}=-0.2dt\Rightarrow d(\ln|v-49|)=-0.2dt$

  We get $v=ce^{-0.2t}+49$ where $c$ is an arbitrary constant

  Substitute $v(0)=0$, $c=-49$

  $v=-49e^{-0.2t}+49$

  When the object reach its limiting velocity, $dv/dt=0\Rightarrow v_{final}=49$

  * a.

    Substitute $v=98\%v_{final}$, we get $48.2=-49e^{-0.2t}+49$

    Solve the equation, we get $t=5\ln50$

  * b.

    $S=\int_{0}^{5\ln50}(-49e^{-0.2t}+49)dt=245e^{-0.2t}|_{0}^{5\ln50}+49t|_{0}^{5\ln50}=245\ln50-240.1$

    Hence, $S\approx718.3 ​$



* **1.3——**

* 1.

  Second order. Linear equation

  

* 2.

  Second order. Nonlinear equation

  

* 5.

  $y_2''(t)=(\cosh t)''=(\frac{e^t+e^{-t}}{2})''=(\frac{e^t-e^{-t}}{2})'=\frac{e^t+e^{-t}}{2}=y_2$

  Hence, $y_2''-y_2=0$, which implies that $y_2(t)=\cosh t$ is a solution

  

* 7.

  $y'=3+2t$

  Thus $ty'-y=3t+2t^2-3t-t^2=t^2$

  Hence $y=3t+t^2$ is a solution



* **2.1——**

* 9.

  Multiple both sides by $\mu(t)>0$, we get $\mu y'-\mu y=\mu2te^{2t}$

  Let $(\mu y)'=\mu y'-\mu y$, $\mu'=-\mu$.

  Hence $\mu=e^{-t+C}$ where $C$ is an arbitrary constant

  Let $C=0$, $\mu=e^{-t}$

  Thus $(e^{-t}y)'=2te^t\Rightarrow y=e^t\int2te^tdt=e^t[\int_{t_0}^{t}2se^sds+c]$ where $c$ is an arbitrary constant

  Hence $y=2(t-1)e^{2t}+ce^t​$

  Substitute $y(0)=1$, we get $-2+c=1$. Thus $c=3$

  Hence $y=2(t-1)e^{2t}+3e^t​$

  

* 12.

  Multiple both sides by $\mu(t)>0$, we get $\mu y'+\frac{t+1}{t}\mu y=\mu$

  Let $(\mu y)'=\mu y'+\frac{t+1}{t}\mu y$, $\mu'=\frac{t+1}{t}\mu$.

  Hence $\mu=te^{t+C}$ where $C$ is an arbitrary constant

  Let $C=0​$, $\mu=te^t​$

  Thus $(te^ty)'=te^t\Rightarrow y=\frac{1}{t}e^{-t}\int te^tdt=\frac{1}{t}e^{-t}[\int_{t_0}^{t}se^sds+c]​$ where $c​$ is an arbitrary constant

  Hence $y=\frac{t-1+ce^{-t}}{t}​$

  Substitute $y(\ln2)=1$, we get $-1+\frac{1}{2}c=0$. Thus $c=2$

  Hence $y=\frac{t-1+2e^{-t}}{t}​$

  

* 16.

  * a.

    ![](D:\kowalski\SUSTech\OrdinaryDifferentialEquation\Homework\Week1\2.1-16.jpg)

    As $t\to0$, $y\to1$

    As  $t\to\infty$, $y\to+\infty​$

  * b.

    Multiple both sides by $\mu(t)>0​$, we get $\mu y'+\frac{1}{\tan t}\mu y=\mu e^t/\sin t​$

    Let $(\mu y)'=\mu y'+\frac{1}{\tan t}\mu y$, $\mu'=\frac{1}{\tan t}\mu$.

    Hence $\mu=(\sin t)e^C$ where $C$ is an arbitrary constant

    Let $C=0​$, $\mu=\sin t$

    Thus $(\sin ty)'=e^t\Rightarrow y=\frac{1}{\sin t}\int e^tdt=\frac{1}{\sin t}[\int_{t_0}^{t}e^sds+c]$ where $c$ is an arbitrary constant

    Hence $y=\frac{e^t+c}{\sin t}​$

    Substitute $y(1)=a​$, we get $e+c=a\sin 1​$. Thus $c=a\sin1-e​$

    Hence $y=\frac{e^t+a\sin1-e}{\sin t}$

    The critical value $a_0​$ can be solved when $y'=0​$

    Since $t\to0$, $e^t+a\sin1-e\to a\sin1-e+1$ and $\sin t\to0$

    $a\sin1-e+1=0\Rightarrow a=(e-1)/\sin1$

    This time, $y=\frac{e^t-1}{t}$ and the critical value $a_0=(e-1)/\sin 1$

  * c.

    For $a_0>(e-1)/\sin1​$, $y​$ decrease to approach 1 in the infinitely small right neighborhood of $t=0​$ and then increase to $+\infty​$

    For $a_0<(e-1)/\sin1$, y increase to approach 1 in the infinitely small right neighborhood of $t=0$ and then increase to $+\infty​$

  

* 20.

  Multiple both sides by $\mu(t)>0​$, we get $\mu y'-\mu y=\mu+3\mu\sin t​$

  Let $(\mu y)'=\mu y'-\mu y$, $\mu'=-\mu$.

  Hence $\mu=e^{-t+C}$ where $C$ is an arbitrary constant

  Let $C=0$, $\mu=e^{-t}$

  Thus $(e^{-t}y)'=e^{-t}(1+3\sin t)\Rightarrow y=e^t\int (e^{-t}+3e^{-t}\sin t)dt=e^t[\int_{t_0}^{t}(e^{-s}+3e^{-s}\sin s)ds+c]$ where $c​$ is an arbitrary constant

  Hence $y=-\frac{3}{2}\sqrt{2}\sin(t+\frac{\pi}{4})-1+ce^t$

  As $t\to\infty$, $|-\frac{3}{2}\sqrt{2}\sin(t+\frac{\pi}{4})|\leq\frac{3}{2}\sqrt{2}$ and $|ce^t|\to\infty$ if $c\not=0$ or $ce^t\equiv0$ if $c=0$

  Hence, to let $y​$ remains finite as $t\to\infty​$, $c=0​$

  which implies that  $y=-\frac{3}{2}\sqrt{2}\sin(t+\frac{\pi}{4})-1$ and $y(0)=y_0=-\frac{5}{2}$

  

* 25.

  Since all the solution are asymptotic to the line $y=3-t$, $y'=-1$ when $y=3-t$ also $y'<-1$ when $y>3-t$ and $y'>-1$ when $y<3-t$

  Thus, construct equation $y'+y=2-t$

  Solve the equation:

  ​	Multiple both sides by $\mu(t)>0$, we get $\mu y'+\mu y=\mu(2-t)$

  ​	Let $(\mu y)'=\mu y'+\mu y$, thus $\mu'=\mu$

  ​	Hence $\mu=ce^t$ where $c>0$ and is arbitrary

  ​	Let $c=1$, thus $\mu=e^t$

  ​	We get $(e^ty)'=e^t(2-t)\Rightarrow y=e^{-t}[\int(2-t)e^tdt]=e^{-t}[\int_{t_0}^{t}(2-s)e^sds+c]$ where $c$ is an arbitrary constant

  ​	Hence $y=3-t+ce^{-t}$

  ​	As $t\to\infty$, $y\to(3-t)$

  

* 29.

  If $y'-2y=0​$, $y=A\exp(-\int(-2)dt)=Ae^{2t+c}​$, where $A,c​$ are arbitrary constants

  Now, assume the solution of $y'-2y=t^2e^{2t}$ is of the form $y=A(t)e^{2t+c}$

  $y'-2y=A'(t)e^{2t+c}+2A(t)e^{2t+c}-2A(t)e^{2t+c}=A'(t)e^{2t+c}=t^2e^{2t}$

  Thus, $A'(t)=e^{-c}t^2$. We can get $A(t)=e^{-c}\int t^2dt=e^{-c}(\frac{1}{3}t^3+C)$

  Hence $y=A(t)e^{2t+c}=\frac{1}{3}t^3e^{2t}+k$ where $k$ is an arbitrary constant 



* **2.2——**

* 1.

  $dy/dx=x^2/y\Rightarrow ydy=x^2dx\Rightarrow\int ydy=\int x^2dx$

  Thus, $\frac{1}{2}y^2=\frac{1}{3}x^3+c$ where $c$ is an arbitrary constant

  

* 10.

  * a.

    $dy/dx=(1-2x)/y\Rightarrow ydy=(1-2x)dx\Rightarrow\int ydy=\int(1-2x)dx$

    Thus, $\frac{1}{2}y^2=x-x^2+c$ where c is an arbitrary constant

    Substitute $x=1$ and $y=-2$, we get $c=4$

    Hence, $y=-\sqrt{2x-2x^2+4}​$

  * c.

    Solution is defined iff $2x-2x^2+4\geq0$ which is $-1<x<2​$

