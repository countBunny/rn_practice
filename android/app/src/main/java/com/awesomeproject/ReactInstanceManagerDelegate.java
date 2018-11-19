package com.awesomeproject;

import android.app.Application;
import android.content.Context;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

import javax.annotation.Nullable;

public class ReactInstanceManagerDelegate {
    private static ReactInstanceManagerDelegate mSingleton;

    private ReactInstanceManager mReactInstanceManager;

    private ReactInstanceManagerDelegate() {
    }

    @Nullable
    public static ReactInstanceManager getManager() {
        if (null == mSingleton) {
            synchronized (ReactInstanceManagerDelegate.class) {
                if (null == mSingleton) {
                    mSingleton = new ReactInstanceManagerDelegate();
                }
            }
        }
        return mSingleton.mReactInstanceManager;
    }

    public static void init(Application application) {
        getManager();
        mSingleton.mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(application)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
    }
}
